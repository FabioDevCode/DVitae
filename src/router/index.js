import Vue from 'vue';
import VueRouter from 'vue-router';

import DashBoard from '../views/Dashboard.vue';
import ProjetS from '../views/Projets.vue';
import InformationS from '../views/Informations.vue';
import DocumentS from '../views/Documents.vue';
import RéglageS from '../views/Réglages.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashBoard
    },
    {
        path: '/projets',
        name: 'Projets',
        component: ProjetS
    },
    {
        path: '/informations',
        name: 'Informations',
        component: InformationS
    },
    {
        path: '/documents',
        name: 'Documents',
        component: DocumentS
    },
    {
        path: '/réglages',
        name: 'Réglages',
        component: RéglageS
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router