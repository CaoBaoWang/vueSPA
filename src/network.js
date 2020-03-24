import Axios from 'axios'

Axios.defaults.baseURL = baseUrl();


function baseUrl() {

    var production = 'http://39.96.243.236/';
    var test = 'http://47.93.113.4:8089/';
    /**
     * 涉及html5 plus 原生调试时 用tag（必须构建后放到原生app中，也可能使用某个debug环境）
     * @type {number}
     * 1. 测试环境
     * 3.正式环境
     */




        // var urlTag = 1 ;
        //
        // switch (urlTag) {
        //     case 1:
        //         return test;
        //     case 3:
        //         return production ;
        // }


    var isProduction = process.env.NODE_ENV === 'production';
    if (isProduction)
        return production;
    else
        return test;


}

const API = {
    login: 'api/account/login'
};


console.log('api=' + API.login);

export {API} ;

Axios.get(API.login, {
    params: {
        loginName: 'admin',
        password: 'a123456'
    }
})
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    });


Axios.post(API.login, {
    loginName: 'admin',
    password: 'a123456'
})
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    });