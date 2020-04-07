import axios, { get} from '../network';

export default {
    namespaced: true,
    state: {
        user: {
            "loginName": "",
            "name": "",
            "password": "",
            "salt": "",
            "mobile": "",
            "isValid": 0,
            "orgId": "",
            "orgCode": "",
            "orgName": "",
            "description": "",
            "createTime": "",
            "updateTime": "",
            "keyWord": "",
            "roles": [
                {
                    "id": "",
                    "name": "",
                    "isValid": 0,
                    "description": "",
                    "createTime": "",
                    "updateTime": "",
                    "keyWord": "",
                    "department": "",
                    "content": "",
                    "value": ""
                }
            ],
            "roleIds": "",
            "roleNames": "",
            "loginLog": {
                "id": "",
                "loginName": "",
                "loginIP": "",
                "beginTime": "",
                "loginTime": "",
                "endTime": "",
                "keyWord": ""
            },
            "department": "",
            "content": "",
            "token": "",
            "oldPassword": ""
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        isLogin(state) {
            return state.user.loginName !== '';
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }

    },
    actions: {
        login(store, param) {
            return new Promise((resolve, reject) => {
                get('/api/account/login', param)
                    .then((response) => {
                        store.commit('setUser', response.data);
                        let d =response.data;
                        var token = d.token;
                        var uid = d.uid;
                        var version = '1.0.2';
                        axios.defaults.headers.common['token'] = token;
                        axios.defaults.headers.common['token'] = uid;
                        axios.defaults.headers.common['token'] = version;
                        resolve(response);
                    })
                    .catch(response => {
                        reject(response)
                    });
            })
        }

    }


}