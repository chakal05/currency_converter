<template>
  <div id="app">
    <tete></tete>
    <!--  <landingPage  />
    <supadmin></supadmin>-->
  </div>
</template>

<script>
//import landingPage from "./components/landingPage.vue";
//import supadmin from "./components/supadmin.vue";
import tete from "./components/header.vue";

export default {
  name: "app",
  components: {
    tete
    // landingPage
    //supadmin
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: rgb(248, 248, 248);
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
