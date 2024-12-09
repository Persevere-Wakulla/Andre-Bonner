import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import {library } from '@fortawesome/fontawesome-svg-core';
import * as all from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './style.css';
import App from './App.vue';
import Home from './components/Home.vue';
import Item from './components/Item.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', component: Home },
        { path: '/', component: Item },
        
    ]
});

library.add([all.faHome, all.faUser, all.faCalendar,
    all.faCheck, all.faSave, all.faMailReply, all.faCog, all.faPortrait, all.faVideoCamera, all.faBell,
    all.faCalendarAlt, all.faUserPlus, all.faSmile, all.faChain, all.faTags, all.faMusic, all.faMessage,
    all.faImagePortrait, all.faImage, all.faThumbsUp, all.faFlag, all.faSignsPost, all.faCopyright, all.faMapPin, all.faLocationPin,
    all.faThumbsDown, all.faPlusCircle, all.faPlus, all.faHamburger, all.faExpand, all.faBars, all.faReply, all.faShare, all.faPaperPlane,
    all.faCancel, all.faShare, all.faX, all.faHeart, all.faShoppingCart, all.faCartShopping, all.faMinus, all.faTrash, all.faTrashAlt, all.faTrashCan, all.faTrashArrowUp
]);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');

