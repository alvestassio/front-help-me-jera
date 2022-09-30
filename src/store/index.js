import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

import Tag from './modules/tag';

Vue.use(Vuex);

// const persistedStateData = createPersistedState({
//   paths: ['Session.email', 'Session.token'],
// });

export default new Vuex.Store(Tag);
