import axios, { get} from '../network';

export default {
    namespaced: true,
    state: {
        user: {
            accountId:'',
            name:'',
            mobile:'',
            loginName:'',
            roleId : '',
            roleName:'',
            token : '',



        }
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getUid(){
          this.getUser().accountId;
        },
        isLogin(state) {
            return state.user.accountId !== '';
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
                        var version = '1.0.4';

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