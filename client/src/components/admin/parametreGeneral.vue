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
        <v-btn color="primary" @click="adminColor">change app color</v-btn>
      </v-col>

      <v-col class="d-flex justify-center">
        <form @submit.prevent="sendFile" enctype="multipart/form-data" >
          <v-file-input 
            label="Logo"
            type="file"
            prepend-icon="mdi-camera"
            @change="selectFile"
          ></v-file-input>
          <v-btn color="primary" type="submit">Envoyer</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";
import getData from "../../services/getData";
export default {
  components: {},
  data: () => ({
    type: "hex",
    hex: "#FF00FF",
    file: ""
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
    ...mapMutations(["setColor", "setLogo"]),

    adminColor: function() {
      this.setColor(this.color);
    },

    adminLogo: function() {
      this.setLogo(this.value); 
    },

    selectFile(event) {
     this.file = event ;
      console.log(this.file);
    },

    async sendFile() {
      let formData = new FormData();
      formData.append("file", this.file);

      await getData.loadLogo(formData);
    }
  }
};
</script>

<style>
</style>