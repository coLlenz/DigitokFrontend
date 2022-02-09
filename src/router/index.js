import Vue from "vue";
import Router from "vue-router";

import Login from "../components/Login.vue";
import Todos from "../components/Todos.vue";
import Auth from "../components/Auth.vue";
import store from "@/store/index";
import Error from "../components/error/Error_404.vue";

Vue.use(Router);

const router = new Router({
  linkActiveClass: "active-route",
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: "history",
  routes: [
    {
      path: "/login",
      component: Login, 
     // meta: { isGuest: true },
    },

    {
      path: "/todos",
      //meta: { requiresAuth: true },
      name: "todos",
      component: () => {
        import(/*webpackChunkName: "todos" */"../components/Todos.vue");
      },
    },

    {
      path: "*",
      component: Error,
    },
  ],
});

console.log(store.getters.isLoggedIn);



export default router;
