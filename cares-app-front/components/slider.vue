<template>
  <section class="hero is-large is-info ">
      <div class="container is-max-desktop ">
      <img class="is-fullwidth" src="~/static/cares-jobs-slider.jpg" alt="">
      </div>
    <div class="column is-half container">
      <p class="title ">Bienvenid@ a Cares Jobs</p>
      <p class="subtitle">dinos que buscas para empezar</p>
      <nuxt-link class="button is-success is-rounded is-one-quarter" to="registerClient"
        >Busco un@ cuidador@</nuxt-link
      >
      <nuxt-link class="button is-warning is-rounded is-one-quarter" to="registerClient"
        >Busco trabajo de cuidador@</nuxt-link
      >
      <nuxt-link class="button is-danger is-rounded is-one-quarter" to="login"
        >Ya estoy registrad@</nuxt-link
      >
    </div>
  </section>
</template>
