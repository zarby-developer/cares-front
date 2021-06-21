<template>
  <section>
    <div class="columns is-mobile is-centered has-background-info">
      <div class="column is-two-fifths">
        <h1 class="title">Inicia sesión</h1>
        <b-field label="Ingresa tu email">
          <b-input type="email" v-model="email"></b-input>
        </b-field>
        <b-field label="Ingresa tu contraseña">
          <b-input type="password" password-reveal v-model="password"></b-input>
        </b-field>
              <button class="button is-success" @click="login">
               iniciar
              </button>
      
        </div>
      </div>
      
  </section>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Login",
  head() {
    return {
      title: "Identifícate",
    };
  },
  data() {
    return {
      hasErrors: false,
      errorMessage: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        console.log("boton pulsado")
        /* this.validForm() */
        const response = await this.$api.auth.login(this.email, this.password);
        const token = response.token;
        console.log(token)
        this.$store.dispatch("login", token);
        this.$router.push("/home");
      } catch (error) {
        this.errorMessage = error.message;
        this.hasErrors = true;
      }
    },
    validForm() {
      if (this.email === "") {
        throw new Error("Introduce el email");
      }
      if (this.password === "") {
        throw new Error("Introduce la contraseña");
      }
    },

  },
};
</script>