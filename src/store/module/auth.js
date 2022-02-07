import axios from "axios"

const state = {
    user: [],
};


const getters = {

};

const actions = {
    async authlogin({ commit }, data) {
        console.log(data);
        
        const response = await axios.post(
            "http://127.0.0.1:8000/api/login", { email: data.email, password: data.password }, 
        );

        commit('setUser', response.data);
    }
};

const mutations = {
    setUser: (state, user) => (state.user = user)
};



export default {
    state,
    getters,
    actions,
    mutations
}