<template>
  <div class="container-wrap">
    <div class="columns is-gapless is-flex is-multiline">
      <div class="column is-full">
        <valoration-item
          v-for="(item, i) in valoraciones"
          :value="item"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>
<script>
import valorationItem from "@/components/partials/valorationitem";
export default {
  name: "mainWall",
  components: {
    valorationItem,
  },
  data() {
    return {
      content: "",
    };
  },
  props: {
    valoraciones: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    valorate() {},
  },
};
</script>