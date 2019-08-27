<template>
  <div id="app">
   <!-- <home></home>-->
   <directeur></directeur>
  

  </div>
</template>

<script>
//import home from "./components/home";
import directeur from "./components/directeur";
export default {
  name: "App",
  components: {
    //home
   directeur 
  },
  data: () => ({
    //
  })
};
</script>

//Todo Make a better logo 


<style >
html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #FAFAFA;
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
