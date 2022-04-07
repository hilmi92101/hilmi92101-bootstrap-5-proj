const state = {
    offCanvas: false,
};
const getters = {

    offCanvas: state => {
        return state.offCanvas;
    },

    
};
const actions = {

    toggleNavbar: (context, payload) => {
        context.commit('toggleNavbar');
    },

};
const mutations = {

    toggleNavbar: (state, payload) => {
        state.offCanvas = !state.offCanvas;
    },

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
