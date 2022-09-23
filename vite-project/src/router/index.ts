import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/main/home.vue"
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component:Home,
        name:"home"
        // redirect:"/"
    },
    {
        path: "/login",
        name:"login",
        component:()=>import("../views/login.vue")
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router