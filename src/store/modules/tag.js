import Tag from '@/api/resources/tag';

const state = {
  tags: null,
};

const getters = {
  getTags($state) {
    return $state.tag;
  },
};

const actions = {
  findTags({ commit }) {
    Tag.listAll().then((response) => {
      commit('setTags', response);
    });
  },
};

const mutations = {
  setTags($state, payload) {
    console.log('ola')
    const stateCopy = $state;
    stateCopy.tags = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
