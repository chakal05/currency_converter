<template>
  <v-container>
    <v-img :src= load  ></v-img>

    <v-row align="center" justify="center">
      <v-col cols="12" md="10" class="elevation-5 forme">
        <v-row>
          <v-card-title>
            Fiche de l'ecole
            <div class="flex-grow-1"></div>
          </v-card-title>
        </v-row>

        <!-- @submit.prevent="sendFile" -->

        <form action="/upload" method="POST" enctype="multipart/form-data">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Nom"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Responsable"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Telephone de l'ecole"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Telephone responsable"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Email ecole"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="email" :rules="emailRules" label="Email responsable" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Numero d'autorisation"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Delivre le "
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="email" :rules="emailRules" label="Ville" required></v-text-field>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Adresse"
                required
              ></v-text-field>
              <v-file-input
                label="Logo"
                type="file"
                name="file"
                prepend-icon="mdi-camera"
                @change="selectFile"
              ></v-file-input>
            </v-col>
          </v-row>

          <div class="flex-grow-1"></div>

          <v-row align="center" justify="center">
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
          </v-row>
          <div class="flex-grow-1"></div>
          <v-row align="center" justify="center">
            <v-col>
              <v-btn color="success" @click="sendFile">Valider</v-btn>
            </v-col>
            <v-btn class="redBtn" color="error" @click="reset">Annuler</v-btn>
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
    load:"http://localhost:5000/upload" + logo,
    logo: ""
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
      this.dialog = false;
    },

    selectFile(event) {
      this.file = event;
    },

    async sendFile() {
      let formData = new FormData();
      formData.append("file", this.file);

      await getData.loadLogo(formData);
    },

    regret() {
      this.setColor("#283593");
      this.theme = "#283593";
    },

    async reset() {
      let name = "245f63a3f77dad2daf41dbdac29f9716.jpeg";
      let reponse = await getData.getLogo(name).then(reponse =>{
       if(reponse.data){
        this.logo = reponse.data;
       };
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  .row {
    .forme {
      background-color: #fff;
    }

    .redBtn {
      margin-right: 0.7rem;
    }
  }
}
</style>

