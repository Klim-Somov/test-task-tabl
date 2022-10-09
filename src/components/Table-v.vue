<template>
  <p>sdgsdfgdf</p>
</template>

<script>
import { mapActions, mapGetters} from "vuex";

export default {
  name: "v-table",
  props: {},
  data: () => {
    return {};
  },
  methods: {
    ...mapActions(["GET_ITEMS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["items"])
  },
  mounted() {
    this.GET_ITEMS_FROM_API()
  },
};
</script>

<style></style>
