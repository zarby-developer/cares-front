<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">Presentación</p>
      <p v-if="dataUser.short_description" class="subtitle">
        {{ dataUser.short_description }}
      </p>
      <p v-if="!dataUser.short_description" class="subtitle">sin descripción</p>
    </div>

    <div class="hero-body">
      <p class="title">Currículum</p>

      <div class="content is-normal" v-if="dataUser.cv">
        <h1>Cv de {{ dataUser.firstname }}</h1>
        <p>{{ dataUser.cv }}</p>
      </div>

      <p v-if="!dataUser.cv" class="subtitle">
        Aún no actualizó su experiencia
      </p>
    </div>
    <div class="columns">
      <div class="column is-full box is-info">
        <h1>Ofertas de empleo Publicadas</h1>
        <offers-wall :value="offersFilter" />
      </div>
    </div>
     <div class="columns">
      <div class="column is-full box is-info">
        <h1>Valoraciones de Usuarios</h1>
        <valoration-wall :valoraciones="valorations" />
      </div>
    </div>
    <br />
    <div class="field">
      <label class="label">puntuación</label>
      <div class="control">
        <div class="select">
          <select v-model="value">
            <option
              v-for="value in values"
              
              :key="value"
              :value="value"
            >{{value}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Valoración</label>
      <div class="control">
        <textarea
          class="textarea"
          v-model="content"
          placeholder="Escribe aquí"
        ></textarea>
      </div>
    </div>

    <button @click="valorate" class="button is-danger">
      Valorar al usuario
    </button>
  </section>
</template>
<script>

export default {
  data() {
    return {
      dataUser: {},
      offersFilter: [],
      values:[],
      value: "",
      content: "",
      valorations:[]
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
  
  async mounted() {
    try {
      const idProfile = this.$store.state.userTargedId;
      this.values=[1,2,3,4,5]
      this.dataUser = await this.$api.users.findById(idProfile);
      console.log(this.dataUser.firstname);
      const valorations = await this.$api.valorations.list()
      this.valorations= valorations.filter((article) => {
        return article.from._id === this.dataUser._id;
      })

      const articles = await this.$api.works.list();
      this.offersFilter = articles.filter((article) => {
        return article.author._id === this.dataUser._id;
      });
     

      {
       this.dataUser, this.offersFilter, this.valorations;
      }
     
    } catch (error) {
      console.error(error.message);
    }
  },
  methods: {
    async valorate() {
      try {
        const newValoration = {
          author:{
            _id:this.currentUser._id,
            name:this.currentUser.firstname
          },
          valoration: this.value,
          from: {
            _id: this.dataUser._id,
          },
          content: this.content,
        };
        await this.$api.valorations.send(newValoration);
      } catch (error) {}
    },
  },
};
</script>