<template>
  <v-container>
<v-row align="center" justify="center">
  
  
   <v-col>  <h2> Fiche de l'ecole</h2> </v-col>
  
   
   </v-row>

    <v-row align="center" justify="center">

      <v-col class="forme"  >

      <form @submit.prevent="sendFile" enctype="multipart/form-data">

 <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Nom"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Responsable"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Telephone"
            required
          ></v-text-field>
        </v-col>
      </v-row>

       <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Tel portable"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Fax"
            required
          ></v-text-field>
        </v-col>
      </v-row>

        <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Numero d'autorisation"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Delivre le "
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Ville"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center"  justify="center">
        <v-col>
           <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Adresse"
      required
    ></v-text-field>
      <v-file-input label="Logo" type="file" prepend-icon="mdi-camera" @change="selectFile"></v-file-input>
  
        </v-col>
      </v-row>
     
      <v-dialog v-model="dialog" width="300px">
          <template v-slot:activator="{ on }">
            <v-btn :color="theme" dark v-on="on">Changer de theme</v-btn>
          </template>
          <v-card>
            <v-color-picker
              :show-swatches="true"
              :hide-canvas="true"
              :hide-inputs="true"
              swatches-max-height="600px"
              v-model="color"
            ></v-color-picker>
            <v-card-actions>
              <v-btn color="green darken-1" text @click="adminColor">Choisir</v-btn>
              <v-btn color="green darken-1" text @click="regret">Regretter</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
<div class="flex-grow-1"></div>

  <v-row>
  <v-col>
     <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
    
  </v-col>

  </v-row>

       </form>

      </v-col>

    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import getData from "../../services/getData";
export default {
  components: {},
  data: () => ({
    type: "hex",
    hex: "#FF00FF",
    file: "",
    dialog: null,
    theme: "#283593",
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ]
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
    },
    ...mapState(["defaultColor"])
  },

  methods: {
    ...mapMutations(["setColor", "setLogo"]),

    adminColor: function() {
      this.setColor(this.color);
      this.theme = this.color;
    },

    adminLogo: function() {
      this.setLogo(this.value);
      dialog = false;
    },

    selectFile(event) {
      this.file = event;
      console.log(this.file);
    },

    async sendFile() {
      let formData = new FormData();
      formData.append("file", this.file);

      await getData.loadLogo(formData);
    },

    regret() {
      this.setColor("#283593");
      this.theme = "#283593";
    }
  }
};
</script>

<style lang='scss' scoped>

.container {

  .row{

    .forme {
      background-color: #fff;
    }
  }
}

</style>

