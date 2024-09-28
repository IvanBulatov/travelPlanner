import { createRouter, createWebHistory } from 'vue-router'

import UserPage from './views/UserPage.vue';
import TripsPage from './views/TripsPage.vue';
import CreateTripPage from './views/CreateTripPage.vue';

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'profile',
            component: UserPage
        },
        {
            path: '/trips',
            name: 'trips',
            component: TripsPage
        },
        {
            path: '/create-trip',
            name: 'create-trip',
            component: CreateTripPage
        }

    ]
})