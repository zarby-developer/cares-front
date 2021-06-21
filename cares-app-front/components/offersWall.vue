<template>
 <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <div class="column is-full">
        <offer-item
          v-for="(item,i) in value"
          :value="item"
          :key="i"
        />
        </div>
      </div>
     
    </div>
</template>
<script>
import offerItem from "@/components/partials/offerItem";
export default {
  name: "mainWall",
  components: {
    offerItem
  },
   data() {
    return {
      content: "",
    };
   },
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
  },
};
</script>