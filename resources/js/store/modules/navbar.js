const state = {
    canvas: false,
    logoImage: {
        src: `/images/logo.svg`,
        alt: `The logo`,
    },
};
const getters = {

    canvas: state => {
        return state.canvas;
    },
    logoImage: state => {
        return state.logoImage;
    },
    
};
const actions = {

    toggleCanvas: (context, payload) => {
        context.commit('toggleCanvas');
    },

    toggleDropdown: (context, payload) => {
        var e = payload; 
        const _d = e.target.closest(".dropdown");
        let _m = document.querySelector(".dropdown-menu", _d);

        setTimeout(
            function () {
            const shouldOpen = _d.matches(":hover");
            _m.classList.toggle("show", shouldOpen);
            _d.classList.toggle("show", shouldOpen);

            _d.setAttribute("aria-expanded", shouldOpen);
            },
            e.type === "mouseleave" ? 300 : 0
        );
    },

    

};
const mutations = {

    toggleCanvas: (state, payload) => {
        state.canvas = !state.canvas;
    },

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
