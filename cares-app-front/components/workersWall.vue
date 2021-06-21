<template>
 <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <div class="column is-full">
        <worker-item
          v-for="(item,i) in value"
          :value="item"
          :key="i"
        />
        </div>
      </div>
     
    </div>
</template>
<script>
import WorkerItem from "@/components/partials/workerItem";
export default {
  name: "mainWall",
  components: {
    WorkerItem
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