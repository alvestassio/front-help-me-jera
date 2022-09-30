import Vue from 'vue'
import VueRouter from 'vue-router'

import login from "../views/LoginView.vue";
import home from "../views/Home.vue";
import questionDetails from "../views/QuestionDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/perguntas',
    name: 'perguntas',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/pergunta-detalhes',
    name: 'pergunta-detalhes',
    component: questionDetails,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach(function (to, from, next) {
//   const authenticationStatus = store.getters.authenticationStatus;
//   const authenticationRequired = to.meta.authenticationRequired;

//   if (!authenticationRequired) return next();

//   if (authenticationStatus == 'AUTHENTICATED') return next();

//   next('/login');
// });

// router.beforeEach(function (to, from, next)  {
//   if(to.path != '/login') return next();

//   const authenticationStatus = store.getters.authenticationStatus;

//   if (authenticationStatus != 'AUTHENTICATED') return next();

//   next('/');
// });

export default router;
