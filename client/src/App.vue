<template>
  <div id="app">
      <!--   <home></home>           
   <directeur></directeur>  -->

   <router-view></router-view>
  </div>
</template>

<script>
//import home from "./views/home";
//import directeur from "./views/directeur";
export default {
  name: "App",
 
  data: () => ({
    //
  })
};
</script>

//Todo Make a better logo 


<style lang='scss'>


html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #fafafa;
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
