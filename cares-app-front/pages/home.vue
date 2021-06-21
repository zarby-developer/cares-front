<template>
  <div >
    <div class="notification is-info" >
      
      bienvenid@ a cares jobs {{currentUser.firstname}}.Para empezar a usar nuestra app, te recomendamos que ingreses a tu perfil a través del botón de la parte superior derecha y actualices tus datos
    </div>
    <div class="columns">
    <div class="column is-half box is-info">
    <nuxt-link class="button is-success is-rounded is-one-quarter" to="jobForm"
        >Crear oferta de empleo</nuxt-link
      >
      <h1>Ofertas de empleo</h1>
    <offers-wall :value="articles"/>
    </div>
    <div class="column is-half box box">
    <h1>Cuidadores</h1>
    <workers-wall :value="users"/>
    </div>
     </div>
  </div>
</template>

<script>
import offersWall from "~/components/offersWall";
import workersWall from "~/components/workersWall";

export default {
  name: "HomePage",

  components: {
    offersWall,
    workersWall,
  },
  data:{
    
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  async asyncData(context){
    try {
      const articles = await context.app.$api.works.list();

       const users = await context.app.$api.users.list();
    
      
      return {users , articles}
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>
