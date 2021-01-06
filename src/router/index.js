import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    },
    {
        path: "/ProblemSet/",
        name: "ProblemSet",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ProblemSet.vue"),
    },
    {
      path: "/SubmissionList/",
      name: "SubmissionList",
      component: () =>
          import(/* webpackChunkName: "about" */ "../views/SubmissionList.vue"),
  },
    {
        path: "/ProblemView/",
        name: "ProblemView",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ProblemView.vue"),
    },
    {
        path: "/ContestCenter/",
        name: "ContestCenter",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/ContestCenter.vue"
            ),
    },
    {
        path: "/OrganizationCenter/",
        name: "OrganizationCenter",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/OrganizationCenter.vue"
            ),
    },
    {
        path: "/UserInfo/",
        name: "UserInfo",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/UserInfo.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
