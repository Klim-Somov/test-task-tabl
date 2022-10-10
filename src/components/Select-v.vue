<template>
  <div class="v-select">
    <p @click="visible = !visible" class="title">{{ selectedCategory.name || 'Выбрать параметр'}}</p>
    <div v-if="visible" class="options">
      <p
        @click="chooseOption(option)"
        v-for="option in options"
        :key="option.name"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "select-v",
  props: {
    selectedCategory: {
 
      default() {
        return {};
      },
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    chooseOption(option) {
      this.$emit("select", option);
      this.visible = false
    },
  },
};
</script>

<style>
.v-select {
  position: relative;
  width: 200px;
  cursor: pointer;
}
.options {
  z-index: 2;
  position: absolute;
  width: 100%;
  right: 0;
  top: 40;
  border: 1px solid black;
}
.options > p {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.options > p:hover {
  background: #ccc5;
}
.title {
  border: 1px solid black;
}
</style>
