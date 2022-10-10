<template>
  <div class="table-v">
    <div class="header">
      <p>Дата</p>
      <p>Количество</p>
      <p>Расстояние</p>
      <p>Название</p>
    </div>
    <div class="body">
      <ItemV :row_data="row" v-for="row in paginatedItems" :key="row.id" />
    </div>
    <div class="pagination">
      <div
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
        class="page"
        :class="{ pageSelected: page === pageNumber }"
      >
        {{ page }}
      </div>
    </div>
    <button class="btn" @click="onSort">сортировать</button>
    <button class="btn" @click="onClean">сбросить фильтры</button>
  </div>
</template>

<script>
import ItemV from "./Item-v.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "table-v",
  components: { ItemV },
  props: {},
  data() {
    return {
      selectedColumn: "",
      itemsPerPage: 3,
      pageNumber: 1,
    };
  },
  computed: {
    ...mapMutations(["SET_ITEMS"]),
    ...mapGetters(["ITEMS"]),
    pages() {
      return Math.ceil(this.ITEMS.length / 3);
    },

    paginatedItems() {
      let from = (this.pageNumber - 1) * this.itemsPerPage;
      let to = from + this.itemsPerPage;
      return this.ITEMS.slice(from, to);
    },
  },

  methods: {
    ...mapActions(["GET_ITEMS_FROM_API"]),
    
    async onClean() {
      this.GET_ITEMS_FROM_API();
    },

    pageClick(page) {
      this.pageNumber = page;
    },
    onSort() {
      const cat = this.$store.state.selectedCategory;
      const ascedNumber = this.$store.state.ascedNumber;
      const sign = this.$store.state.selectedOperator;
      if (cat.value === "name") {
        this.ITEMS.sort((a, b) => a[cat.value].localeCompare(b[cat.value]));
      } else if (cat.value == "distance") {
        switch (sign.value) {
          case ">":
            this.$store.commit(
              "SET_ITEMS",
              this.ITEMS.filter((item) => item.distance > ascedNumber)
            );

            break;
          case "<":
            this.$store.commit(
              "SET_ITEMS",
              this.ITEMS.filter((item) => item.distance < ascedNumber)
            );

            break;
          case "=":
            this.$store.commit(
              "SET_ITEMS",
              this.ITEMS.filter((item) => item.distance == ascedNumber)
            );

            break;
          default:
            console.log("нет такого кейса");
        }
      } else if (cat.value == "amount") {
        switch (sign.value) {
          case ">":
            this.$store.commit(
              "SET_ITEMS",
              this.ITEMS.filter((item) => item.amount > ascedNumber)
            );

            break;
          case "<":
            this.$store.commit(
              "SET_ITEMS",
              this.ITEMS.filter((item) => item.amount < ascedNumber)
            );

            break;
          case "=":
            this.$store.commit(
              "SET_ITEMS",
              this.ITEMS.filter((item) => item.amount == ascedNumber)
            );

            break;
          default:
            console.log("нет такого кейса");
        }
      } else return;
    },
  },
  mounted() {},
};
</script>

<style>
.table-v {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
}
.header {
  display: flex;
  justify-content: space-around;
  flex: 25%;
  text-align: left;
  border-bottom: 1px solid #000;
}
.header > p {
  flex: 25%;
}
.body {
  margin-top: 40px;
  gap: 15px;
  display: flex;
  flex-direction: column;
}
.pagination {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
.page {
  padding: 8px;
  border: solid 1px #ccc;
  border-radius: 15px;
}
.page:hover {
  cursor: pointer;
  background-color: #ccc5;
}
.pageSelected {
  background-color: #ccc5;
}
.btn {
  cursor: pointer;
  padding: 8px;
  border:none;
  background-color: rgb(135, 200, 135);
  color: white;
  border-radius:15px;
  margin-left: 30px;
  margin-top: 40px;
}
.btn:hover {
  background-color: rgb(12, 152, 245);
}
</style>
