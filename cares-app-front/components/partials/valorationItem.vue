<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ value.author.name }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ value.content }}

          <br />
          {{ value.valoration }}
        </div>
      </div>
      <footer class="card-footer">
        <button class="card-footer-item">contactar</button>
        <button @click="profile" class="card-footer-item">Ver Perfil</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "valorationItem",
  props: {
    value: Object,
  },
  computed: {},
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
  },
};
</script>