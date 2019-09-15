
<template>
  <div class="d-flex justify-center">
    <v-color-picker
      :hide-canvas="true"
      :hide-inputs="true"
      class="ma-2"
      show-swatches
      swatches-max-height="300px"
     @click="getColor"
    ></v-color-picker>
  </div>
</template>

<script>
export default {
  data: () => ({
    swatches: [
      ["#FF0000", "#AA0000", "#550000"],
      ["#FFFF00", "#AAAA00", "#555500"],
      ["#00FF00", "#00AA00", "#005500"],
      ["#00FFFF", "#00AAAA", "#005555"],
      ["#0000FF", "#0000AA", "#000055"]
    ]
  }),

  methods: () => ({
    getColor: function() {
      let item = document.querySelector('.v-color-picker__color');
  
    }
  })
};
</script>

<style>
</style>