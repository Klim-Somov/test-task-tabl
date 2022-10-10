import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    items: [],
    selectedCategory: "",
    selectedOperator: "",
    ascedNumber: "",
  },

  getters: {
    ITEMS: (state) => state.items,
    selectedOperator: (state) => state.selectedOperator,
    selectedCategory: (state) => state.selectedCategory,
    ascedNumber: (state) => state.ascedNumber,
    
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
    SET_CATEGORY(state, selectedCategory) {
      state.selectedCategory = selectedCategory;
    },
    SET_OPERATOR(state, selectedOperator) {
      state.selectedOperator = selectedOperator;
    },
    SET_ASCEDNUMBER(state, ascedNumber) {
      state.ascedNumber = ascedNumber;
    },
  },
});

export default store;
