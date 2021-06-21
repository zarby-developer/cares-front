<template>
  <section>
    <div class="columns is-mobile is-centered has-background-info">
      <div class="column is-two-fifths">
        <h1 class="title">Registrate para buscar cuidadores</h1>
        <b-field label="titulo">
          <b-input type="text" v-model="title"></b-input>
        </b-field>




        <b-field label="Tipo de Servicio" class="select is-multiple">
          <div class="select is-link">
            <select v-model="categories" class="form-control">
              <option
               
              >
                niños
              </option>
                <option
               
              >
               mayores
              </option>
            </select>
          </div>
        </b-field>

        <br />

    
        
        <label class="checkbox">
          <input type="checkbox" v-model="disability" />
         ¿Tiene alguna discapacidad?
        </label>
        <br />
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
          label="Selecciona el municipio del usuario"
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
         <div class="field">
      <div class="control">
        <textarea
          class="textarea is-large"
          placeholder="contenido"
          v-model="content"
        ></textarea>
      </div>
    </div>
    <br />
        <button class="button is-success" @click="post">Publicar</button>
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
     currentUser() {
      return this.$store.getters.currentUser;
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
     title: "",
     categories: "",
     disability:false,
     content:"",
     
      address: "",
     
    };
  },

  methods: {
    async post() {
      console.log("boton pulsado");
      try {
        
          console.log(this.address);
          console.log("boton pulsado");
          const newJob = {
            title: this.title,
           content: this.content,
           author:{
               name:this.currentUser.firstname,
               _id:this.currentUser._id
           },
           categories: this.categories,
            disability: this.disability,
            address: this.address.nm,
          };

          console.log(newJob);
          await this.$api.works.send(newJob); 
         console.log("todo ok")
        this.$router.push("/home");
        
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
