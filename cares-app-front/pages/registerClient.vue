<template>
  <section>
    <div class="columns is-mobile is-centered has-background-info">
      <div class="column is-two-fifths">
        <h1 class="title">Registrate para buscar cuidadores</h1>
        <b-field label="Nombre">
          <b-input type="text" v-model="firstname"></b-input>
        </b-field>

        <b-field label="Apellido">
          <b-input type="text" v-model="lastname"></b-input>
        </b-field>

        <b-field label="Email">
          <b-input type="email" v-model="email"></b-input>
        </b-field>

        <b-field label="Contraseña">
          <b-input type="password" v-model="password"></b-input>
        </b-field>

        <b-field label="Selecciona tu provincia" class="select is-multiple">
          <div class="select is-link">
            <select v-model="provinciaTarged" class="form-control">
              <option
                v-for="provincia in provincias"
                :value="provincia"
                :key="provincia.id"
              >
                {{ provincia.nm }}
              </option>
            </select>
          </div>
        </b-field>

        <br />

        <b-field
          v-if="provinciaTarged"
          label="Selecciona tu municipio"
          class="select is-multiple"
        >
          <div class="select is-link">
            <select v-model="address" class="form-control">
              <option
                v-for="municipio in municipiosFilters"
                :value="municipio"
                :key="municipio.id"
              >
                {{ municipio.nm }}
              </option>
            </select>
          </div>
        </b-field>
        <br />
        <label class="checkbox">
          <input type="checkbox" v-model="legalAcceptance" />
          Acepto los términos y condiciones legales
        </label>
        <br />
        <button class="button is-success" @click="login">Registrarse</button>
      </div>
    </div>
  </section>
</template>
<script>
import provincias from "../static/provincias.json";
import municipios from "../static/municipios.json";
export default {
  name: "RegisterPage",
  head() {
    return {
      title: "Regístrate",
    };
  },
  computed: {
    municipiosFilters() {
      try {
        if (this.provinciaTarged) {
          const result = this.municipios.filter((municipio) => {
            return municipio.id.substr(0, 2) === this.provinciaTarged.id;
          });

          return result;
        }
      } catch (error) {
        return this.municipios;
      }
    },
  },
  mounted() {
    console.log("se esta montando el registro");
    this.provincias = provincias;
    this.municipios = municipios;
    this.municipios.sort((a, b) => a.nm.localeCompare(b.nm));
    this.provincias.sort((a, b) => a.nm.localeCompare(b.nm));
    
  },

 
  data() {
    return {
      municipios: [],
      provincias: [],
      provinciaTarged: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      legalAcceptance: false, //desmarcado por defecto (por ley)
    };
  },

  methods: {
    async login() {
      console.log("boton pulsado");
      try {
        if (this.legalAcceptance) {
          console.log(this.address);
          console.log("boton pulsado");
          const newUser = {
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            email: this.email,
            password: this.password,
            address: this.address.nm,
          };

          console.log(newUser);
          await this.$api.register.register(newUser);
          this.$router.push("/home");
        }
      } catch (error) {
        this.errorMessage = error.message;
        this.hasErrors = true;
      }
    },
    validForm() {
      if (this.firstname === "") {
        throw new Error("Introduce el nombre");
      }
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
