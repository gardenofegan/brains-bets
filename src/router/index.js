import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import answerEntry from '../views/answerEntry.vue';
import nameEntry from '../views/nameEntry.vue';
import boardView from '../views/boardView.vue';
import placeBets from '../views/placeBets.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/name-entry',
    name: 'nameEntry',
    component: nameEntry,
  },
  {
    path: '/board-view',
    name: 'boardView',
    component: boardView,
  },
  {
    path: '/answer-entry',
    name: 'answerEntry',
    component: answerEntry,
  },
  {
    path: '/place-bets',
    name: 'placeBets',
    component: placeBets,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
