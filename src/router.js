import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Blog from "./components/Blog.vue";
import BlogContent from "./components/blog/BlogContent.vue";
import BlogSingle from "./components/blog/BlogSingle.vue";

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },
    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact
    },
    // {
    //     path: '/blog',
    //     name: "Contact",
    //     component: Contact
    // },
    // {
    //     path: '/blog/single',
    //     name: "Contact",
    //     component: Contact
    // },
    {
        path: '/blog',
        name: "Blog",
        component: Blog,
        children: [
            {
                path: "",
                name: "BlogContent",
                component: BlogContent,
            },
            {
                path: "single",
                name: "BlogSingle",
                component: BlogSingle,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;