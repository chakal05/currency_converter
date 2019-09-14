 import Vue from "vue";
 import App from "./App.vue";
 import vuetify from "./plugins/vuetify";
 import Vuetify from 'vuetify/lib';
 import fr from 'vuetify/lib/locale/fr';
 import router from "./router";
 Vue.use(router);
 Vue.config.productionTip = false;
 Vue.use(Vuetify, {
 lang : {
   locale : { fr },
   current: 'fr'
 }
})
 new Vue({
   router,
   vuetify,
   render: h => h(App)
 }).$mount("#app");


 