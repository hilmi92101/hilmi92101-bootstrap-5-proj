const state = {
    currentLang: 'en',
};
const getters = {

    currentLang: state => {
        return state.currentLang;
    },
    

    
};
const actions = {

    exampleDispatch: (context, payload) => {
        
        //context.dispatch('Landing/addToLocalStorageMutateLanguageAmendUrl', chosenLanguage, { root: true });
        
    },

    exampleAxios: (context, payload) => {
        // var data = {
        //     lang: payload
        // } 
        // let config = { 
        //     headers: { 
        //         'Accept': 'application/json', 
        //     } 
        // }
        // axios.post('/get-translation', data, config) 
        // .then(function (response) { 
        //     context.commit('setTexts', response.data.translation);
        //     context.commit('setImages', response.data.images);
        // }) 
        // .catch(function (error) { 
        // });
    },

};
const mutations = {

    setLanguage: (state, payload) => {
        state.currentLang = payload;
    },

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
