import axios from 'axios';

export default {
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
  },
  actions: {
    async signIn({ commit }) {
      try {
        const response = await axios.post('/api/sign-in');
        commit('updateCurrentUser', response.data);
      } catch (error) {
        console.log('Error signing in: ', error);
      }
    },
  },
};
