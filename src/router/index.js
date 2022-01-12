import { createRouter, createWebHashHistory } from 'vue-router'
import BlogListing from '../components/blogListing.vue'
import BlogItem from '../components/blogItem.vue'
const routes = [
    { path: '/', component: BlogListing },
    { path: '/blog/:id', component: BlogItem, name: 'blog' },
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router