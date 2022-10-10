<template>
  <div id="app">
    <Table-V :itemsData="ITEMS" />

    <div class="sortArea">
      <SelectV @select="categorySelect" :selectedCategory="selectedCategory" :options="categories" />
      <SelectV @select="operatorSelect" :selectedCategory="selectedOperator" :options="operators" />
      <input @input="setAsced" placeholder="значение сортировки" type="number" />
    </div>
  </div>
</template>

<script>
import TableV from "./components/Table-v.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import SelectV from "./components/Select-v.vue";

export default {
  name: "App",
  components: {
    TableV,
    SelectV,
  },
  data: () => {
    return {
      ascedNumber: "",
      items: "",
      categories: [
        { name: "Расстояние", value: "distance" },
        { name: "Колличество", value: "amount" },
        { name: "Название", value: "name" },
      ],
      operators: [
        { name: "равно", value: "=" },
        { name: "больше", value: ">" },
        { name: "меньше", value: "<" },
      ],
    };
  },
  methods: {
    ...mapActions(["GET_ITEMS_FROM_API"]),
    ...mapMutations(["SET_CATEGORY"]),

    setAsced(e) {this.$store.commit("SET_ASCEDNUMBER", e.target.value )},

    categorySelect(option) {
      this.$store.commit("SET_CATEGORY", option);
    },
    operatorSelect(option) {
      this.$store.commit("SET_OPERATOR", option);
    },
  },
  computed: {
    ...mapGetters(["ITEMS", "selectedCategory", "selectedOperator"]),
  },
  async mounted() {
    this.GET_ITEMS_FROM_API();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sortArea {
  display: flex;
  gap: 20px;
align-items: center;
justify-content: center;
}
</style>
