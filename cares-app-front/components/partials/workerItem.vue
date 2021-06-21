<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ value.firstname }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ value.short_description }}

          <br />
        </div>
      </div>
      <footer class="card-footer">
      
        <button class="card-footer-item" @click="profile">Ver Perfil</button>
        
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
  
  },
  methods: {
    

    
    profile() {
      try {
        console.log(this.value._id);
        this.$store.state.userTargedId = this.value._id;
        this.$router.push(`/otherUser/${this.value._id}`);
      } catch (error) {
        console.log("cosas");
      }
    },
 
  },
};
</script>