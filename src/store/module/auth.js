import axios from "axios"

const state = {
            user: {
            token: localStorage.getItem("token") || null,
            details: {},
        },
        isLoggedIn: false,
}

const getters = {
    auth: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn
};

const actions = {
    async authlogin({ commit }, data) {
         const response = await axios.post(
            "http://127.0.0.1:8001/api/tokens", { email: data.email, password: data.password }, 
        );

        console.log(response.data);
        commit('setUser', response.data);
        commit('setToken', response.data.access_token);
        commit('setIsLoggedIn', true);
    }
};

const mutations = {
    setUser: (state, user) => (state.user = user),
    setToken: (state, token) => {
        state.user.token = token;
        localStorage.setItem("token", token);
    },
    setIsLoggedIn: (state, isLoggedIn) => (state.isLoggedIn = isLoggedIn)
};



export default {
    state,
    getters,
    actions,
    mutations
}