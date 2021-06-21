<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">Presentación</p>
      <p v-if="dataUser.short_description" class="subtitle">
        {{ dataUser.short_description }}
      </p>
      <p v-if="!dataUser.short_description" class="subtitle">
        Crea una descripción de ti que podrán ver el resto de usuarios
      </p>
      <div class="control">
        <input
          v-model="description"
          class="input is-focused"
          type="text"
          placeholder=" Descríbete brevemente"
        />
      </div>
    </div>
    <br />
    <div class="hero-body">
      <p class="title">Currículum</p>

      <div class="content is-normal" v-if="dataUser.cv">
        <h1>Cv de {{ dataUser.firstname }}</h1>
        <p>{{ dataUser.cv }}</p>
      </div>

      <p v-if="!dataUser.cv" class="subtitle">
        Cuentanos quien eres, tu experiencia y tu formación
      </p>
      <div class="control">
        <textarea
          v-model="cv"
          class="textarea is-info"
          placeholder="Describete"
        ></textarea>
      </div>
      <button @click="update" class="button is-danger">
        Actualizar perfil
      </button>
    </div>
    <div class="columns">
      <div class="column is-full box is-info">
        <h1>Ofertas de empleo Publicadas</h1>
        <offers-wall :value="offersFilter" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cv: "",
      description: "",
      dataUser: {},
      offersFilter: [],
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    async update() {
      try {
        console.log("hasta aqui bien");

        const user = await this.$api.users.findById(this.currentUser._id);
        if(this.cv !== ""){
        user.cv = this.cv;
        }
        if(this.short_description !== ""){
        user.short_description = this.description;
        }
        console.log(user);
        await this.$api.users.update(user);
        console.log("actualizado correctamente");
        
      } catch (error) {}
    },
  },
  async mounted() {
    try {
      const userId = this.currentUser._id;
      this.dataUser = await this.$api.users.findById(userId);
      const articles = await this.$api.works.list();
      this.offersFilter = articles.filter((article) => {
        return article.author._id === this.dataUser._id;
      });
      console.log(this.offersFilter);
      {
        this.dataUser, this.offersFilter;
      }
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>
