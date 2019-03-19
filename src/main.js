import BootstrapVue from "bootstrap-vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";

import AppCars from "./components/AppCars.vue";

Vue.use(BootstrapVue);

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [{ path: "/cars", component: AppCars }];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
