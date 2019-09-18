<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-color-picker
          :show-swatches="true"
          :hide-canvas="true"
          :hide-inputs="true"
          swatches-max-height="300px"
          v-model="color"
        ></v-color-picker>
      </v-col>
      <v-btn color="primary" @click="adminColor" >change app color </v-btn>
    </v-row>
  </v-container>
</template>
<script>

import { mapMutations } from 'vuex';

export default {
   components: {
   
  },
  data: () => ({
    type: "hex",
    hex: "#FF00FF",
  }),

  computed: {
    color: {
      get() {
        return this[this.type];
      },
      set(v) {
        this[this.type] = v;
      }
    },
    showColor() {
      if (typeof this.color === "string") return this.color;

      return JSON.stringify(
        Object.keys(this.color).reduce((color, key) => {
          color[key] = Number(this.color[key].toFixed(2));
          return color;
        }, {}),
        null,
        2
      );
    }
  },

  methods: {
    ...mapMutations (['setColor']),
    
     adminColor: function(){
    this.setColor(this.color);
  }
  },

 
};
</script>

<style>
</style>