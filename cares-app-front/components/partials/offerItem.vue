<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ value.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ value.content }}

        
        </div>
      </div>
      <footer class="card-footer">
        <button class="card-footer-item">contactar</button>
        <button class="card-footer-item" @click="profile">Ver Perfil</button>
        <button class="card-footer-item" v-if="isModificable" @click="del">Eliminar</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "articleItem",
  props: {
    value: Object,
  },
  computed: {
    isModificable() {
      if(this.value.author._id === this.currentUser._id){
        return true
      }
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    profile() {
      try {
        console.log(this.value.author._id);
        this.$store.state.userTargedId = this.value.author._id;
        this.$router.push(`/otherUser/${this.value.author._id}`);
      } catch (error) {
        console.log("cosas");
      }
    },
   async del() {
      console.log(this.value)
      try {
        console.log(this.value._id)
        await this.$api.works.delete(this.value._id)
         
      } catch (error) {}
    },
  },
};
</script>