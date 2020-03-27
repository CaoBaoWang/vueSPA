
import axios from '../network'


function getCreater(url, params) {

    return axios.get(url, {
        params: params
    });
}

function postCreater(url, params) {
    return axios.post(url, params)
}

let api = {};
//account api start
api.login = (params) => getCreater('/api/account/login', params);
//account api edn
api.sendMsgTest = (params) => postCreater('/api/msg/send/test', params);

export {api}