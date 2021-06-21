<template>
     <nav
    class="navbar-brand p-3"
    role="navigation"
    >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" v-if="!isAuth" href="/">
          <div>
            <img src="https://media.glassdoor.com/sqll/678281/cares-squarelogo-1527667630222.png" alt="" />
          </div>
           </a>
             <nuxt-link clnuxt.linkss="navbar-item" v-if="isAuth" to="/home">
          <div>
            <img src="https://media.glassdoor.com/sqll/678281/cares-squarelogo-1527667630222.png" alt="" />
          </div>
        </nuxt-link>
      <!--    <div class="notification is-info">
       <h2 v-if="isAuth">Bienvenid@ {{currentUser.firstname}}"</h2>
       </div> -->
      </div>
      </div>
      
      <div class="navbar-item">
        <div class="navbar-start">
          <div class="buttons">
           
            <nuxt-link
              v-if="!isAuth"
              class="button is-danger is-outlined"
              to="/login"
            >
              Acceder
            </nuxt-link>
             <nuxt-link
              v-if="isAuth"
              class="button is-danger is-outlined"
              to="/user"
            >
              Perfil
            </nuxt-link>
            <nuxt-link
              v-if="isAuth"
              class="button is-danger is-outlined"
              to="/chat"
            >
              Chat
            </nuxt-link>
             <button
              v-if="isAuth"
              class="button is-danger is-outlined"
              @click="logout"
            >
              Cerrar sesión
             </button>
            
          </div>
        </div>
      </div>
  </nav>
</template>
<script>
export default {
  name: "MainNav",
  props: {
    items: Array,
  },
  methods: {
      logout() {
      this.$store.dispatch('logout')
      this.$router.push("/")
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>