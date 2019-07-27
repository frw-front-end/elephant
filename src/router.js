import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/hPage",
      name: "homePage",
      component: () => import("./views/HomePage.vue")
    },
    {
      path: "/custom-page",
      name: "customPage",
      component: () => import("./views/CustomPage.vue"),
    },
    {
      path: "/me",
      name: "mePage",
      component: () => import("./views/MePage.vue")
    },
    {
      path: "/cloth/:id",
      name: "DetailsPage",
      component: () => import("./views/DetailsPage.vue"),

    }
  ]
});
