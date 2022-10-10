<template>
  <div class="item-row">
    <div class="row">{{ row_data.date }}</div>
    <div class="row">{{ row_data.amount }}</div>
    <div class="row">{{ row_data.distance }}</div>
    <div class="row">{{ row_data.name }}</div>
  </div>
</template>

<script>
export default {
  name: "item-v",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
.item-row {
    display: flex;
  
}
.row {
    flex: 25%;
    text-align: left;

}
</style>
