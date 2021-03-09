import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    },
    {
        path: "/ProblemSet/",
        name: "ProblemSet",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ProblemSet.vue"),
    },
    {
        path: "/SubmissionList/",
        name: "SubmissionList",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/SubmissionList.vue"),
    },
    {
        path: "/ProblemView/",
        name: "ProblemView",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ProblemView.vue"),
    },
    {
        path: "/ContestCenter/",
        name: "ContestCenter",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/ContestCenter.vue"
            ),
    },
    {
        path: "/OrganizationCenter/",
        name: "OrganizationCenter",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/OrganizationCenter.vue"
            ),
    },
    {
        path: "/DiscussionHome/",
        name: "DiscussionHome",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/DiscussionHome.vue"
            ),
    },
    {
        path: "/DiscussionView/",
        name: "DiscussionView",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/DiscussionView.vue"
            ),
    },
    {
        path: "/UserInfo/",
        name: "UserInfo",
        meta: {
            DefaultView: true,
        },
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/UserInfo.vue"),
    },
    {
        path: "/Community/",
        name: "Community",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Community.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
