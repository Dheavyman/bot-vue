import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    async getParts({ commit }) {
      try {
        const response = await axios.get('/api/parts');
        commit('updateParts', response.data);
      } catch (error) {
        console.log('Error fetching parts: ', error);
      }
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(robot => robot.head.onSale);
    },
  },
};
