import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    items: [],
  },

  getters: {
    items: (state) => state.items,
  },

  actions: {
    GET_ITEMS_FROM_API: async ({ commit }) => {
  
      const { data } = await axios("http://localhost:3000/items", {
        method: "GET",
      });
      commit("SET_ITEMS", data);
    },
  },

  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
  },
});

export default store;
