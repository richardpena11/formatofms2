import Vue from 'vue';
import VueRouter from 'vue-router';
import Vote from '../views/Vote.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Vote',
    component: Vote,
  },
  {
    path: '/:videoID',
    name: 'Vote with Video ID',
    component: Vote,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
