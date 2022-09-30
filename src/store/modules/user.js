import User from '@/api/resources/users';

const state = {
  user: {},
  users: [],
};

const getters = {
  currentUser: () => (state.user),
  getUsers: () => (state.users),
};

const actions = {
  login({ commit, dispatch }, payload) {
    User.login(payload).then((response) => {
      dispatch('createSession', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },

  googleLogin({ commit, dispatch }, payload) {
    User.googleLogin(payload).then((response) => {
      dispatch('createSession', response);
      dispatch('canBeIndicatedBy', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },

  refreshUser({ commit, dispatch }) {
    User.show().then((response) => {
      dispatch('refreshSession', response);
      dispatch('canBeIndicatedBy', response);
      commit('setUser', response);
      dispatch('removeLoading');
    });
  },

  register({ commit, dispatch }, payload) {
    User.register(payload).then((response) => {
      commit('setUser', response);
      dispatch('createSession', response);
      dispatch('removeLoading');
    });
  },

  logout({ commit, dispatch }) {
    commit('setUser', null);
    dispatch('destroySession');
  },

  canBeIndicatedBy({ commit }, payload) {
    User.users(payload).then((response) => {
      commit('setUsers', response);
    });
  },
};

const mutations = {
  setUser($state, payload) {
    const stateCopy = $state;
    stateCopy.user = payload;
  },
  setUsers($state, payload) {
    const stateCopy = $state;
    stateCopy.users = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
