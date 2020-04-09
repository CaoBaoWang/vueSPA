import Axios from 'axios'

// import store from 'vuex/store'

import Vue from 'vue';
import {Toast} from 'vant';

Vue.use(Toast);

function baseUrl() {


    /**
     * 涉及html5 plus 原生调试时 用tag（必须构建后放到原生app中，也可能使用某个debug环境）
     * @type {number}
     * 0，开发环境
     * 1，朝实测试环境
     * 2, 华远达生产环境
     * 3, 朝实生产环境
     * 4. 辽宁生成环境
     */
    let urlTag = 1;

    switch (urlTag) {
        case 0:
            return "http://192.168.1.253:18080";
        case 1:
            return "http://47.93.124.141:8080";
        case 2:
            return "http://cdn.dev.smarthome-jjle.com";
        case 3:
            return "https://cs-iems.com.cn";//线上

        case 4:
            return "https://iems.smarthome-jjle.com";//辽宁项目试用线上

    }


    //
    // let production = 'http://39.96.243.236';
    // let test = 'http://47.93.113.4:8089';
    //
    // let isProduction = process.env.NODE_ENV === 'production';
    // if (isProduction)
    //     return production;
    // else
    //     return test;


}

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
        // var token = store.getState().account.user.token;
        //  config.headers.token = token;


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
            console.log(response);
            Toast(response.data.msg);

            return Promise.reject(response.data)
        }

    },
    err => {

        if (!err.response)
            return;
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

        Toast(err.message);
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







