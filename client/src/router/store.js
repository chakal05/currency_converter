import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state : {
        defaultColor : '#4CAF50'
    },

    getters : {
        baseColor : (state) => state.defaultColor
    },

    mutations: {
        setColor : (state, customColor) => (state.defaultColor = customColor)
    },

    actions : {
       
    }
})