// import Vue from 'vue';
import axios from "axios";
// import store from '@/store';

const baseConfig = {
  baseURL: process.env.VUE_APP_API_URL,
};

const http = axios.create(baseConfig);

// http.interceptors.request.use(
//   (config) => {
//     if (store.getters.getEmail && store.getters.getToken) {
//       config.headers.common.USER_EMAIL = store.getters.getEmail;
//       config.headers.common.USER_TOKEN = store.getters.getToken;
//       config.headers.common['Cache-Control'] = 'no-cache';
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// http.interceptors.response.use(
//   (response) => {
//     if (response.headers.token) {
//       // store.dispatch('updateToken', response.headers.token);
//     }
//     return response;
//   },
//   (error) => {
//     // store.dispatch('handleError', error);
//     return Promise.reject(error);
//   }
// );

// Plugin.install = function(Vue) {
//   Vue.axios = http;
//   window.axios = http;
//   Object.defineProperties(Vue.prototype, {
//     $axios: {
//       get() {
//         return http;
//       }
//     },
//   });
// };

// Vue.use(Plugin)

export default http;
