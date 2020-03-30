import Axios from 'axios'


function baseUrl() {

    let production = 'http://39.96.243.236';
    let test = 'http://47.93.113.4:8089';
    /**
     * 涉及html5 plus 原生调试时 用tag（必须构建后放到原生app中，也可能使用某个debug环境）
     * @type {number}
     * 1. 测试环境
     * 3.正式环境
     */

        // let urlTag = 1 ;
        //
        // switch (urlTag) {
        //     case 1:
        //         return test;
        //     case 3:
        //         return production ;
        // }


    let isProduction = process.env.NODE_ENV === 'production';
    if (isProduction)
        return production;
    else
        return test;


}

//Axios 全局配置
// Axios.defaults = {
//     baseURL: baseUrl(),
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         'Accept': 'application/json',
//     },
//     timeout: 1000 * 60,
//     withCredentials: false,
//     responseType: 'json'
// };
var axios = Axios.create({
    baseURL: baseUrl(),
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
    },
    timeout: 1000 * 60,
    withCredentials: false,
    responseType: 'json'
})

console.log(axios.defaults.baseURL);


//全局请求拦截
axios.interceptors.request.use(
    (config) => {
        // 1、发起请求时
        config.headers.token = 'login token';

        return config;
    },
    error => {
        // 请求错误时做些事(接口错误、超时等)
        console.log(error);

        // 1.判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            console.log('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案')
            //例如再重复请求一次
        }

        // 2.需要重定向到错误页面
        const errorInfo = error.response;
        console.log(errorInfo);
        if (errorInfo) {
            // error =errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
            const errorStatus = errorInfo.status; // 404 403 500 ... 等
            console.log('errorStatus' + errorStatus)
        }


        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data === undefined) {
            data = response.request.responseText
        } else {
            data = response.data
        }
        if (data.status === 200) {
            //TODO 处理成功回调
            return data;

        } else {
            //TODO Toast msg
            console.log(data.msg);
            return Promise.reject(response.data)
        }

    },
    err => {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误'
                break

            case 401:
                err.message = '未授权，请登录'
                break

            case 403:
                err.message = '拒绝访问'
                break

            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break

            case 408:
                err.message = '请求超时'
                break

            case 500:
                err.message = '服务器内部错误'
                break

            case 501:
                err.message = '服务未实现'
                break

            case 502:
                err.message = '网关错误'
                break

            case 503:
                err.message = '服务不可用'
                break

            case 504:
                err.message = '网关超时'
                break

            case 505:
                err.message = 'HTTP版本不受支持'
                break
        }

        //TODO 统一提示
        console.error(err)

        return Promise.reject(err)
    }
)

function postCreater(url, params) {
    return axios.post(url, params)
}

function getCreater(url, params) {
    return axios.get(url, {
        params: params
    });
}

export {
    getCreater as get,
    postCreater as post
};

export default axios;







