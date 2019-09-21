<template>
<v-row align="center" justify="center">


  <v-col cols="12" md="10">

<v-data-table
    :headers="headers"
    :items="profs"
    :search="search"
    sort-by="matiere"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-card-title>
          Filliere 
         <div class="flex-grow-1"></div>
        </v-card-title>
      <v-toolbar flat color="white">
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Rechercher"
          single-line
          hide-details
        ></v-text-field>

        <div class="flex-grow-1"></div>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="#21398a" dark class="mb-2" v-on="on">Ajouter</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Nom" label="Nom"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Matière" label="Matière"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Email" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Téléphone" label="Téléphone"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Mot de passe">******</v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-4" text @click="close">Annuler</v-btn>
              <v-btn color="blue darken-4" text @click="save">Enregistrer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
      <v-icon small @click="deleteItem(item)">delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="#21398a" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>


  </v-col>

</v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Filliere",
        align: "left",
        sortable: false,
        value: "Nom"
      },
      { text: "Code", value: "Code" },
      { text: "Duree / an", value: "Duree" },
      { text: "Niveau", value: "Niveau" },
      { text: "Capacite d'accueil", value: "Capacite" },
      { text: "Actions", value: "action", sortable: false }
    ],
    profs: [],
    editedIndex: -1,
    editedItem: {
      Nom: "",
      Code: 0,
      Duree: 0,
      Niveau: "",
     Capacite: 0
    },
    defaultItem: {
      Nom: "",
      Code: 0,
      Duree: 0,
      Niveau: "",
     Capacite:0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nouvel ajout" : "Changer";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.changeLocale();
    this.initialize();
  },

  methods: {
    changeLocale() {
      this.$vuetify.lang.current = "fr";
    },

    initialize() {
      // todo Make a request to db and fill array  dynamically

      this.profs = [
        {
          Nom: "Scientifique",
          Code: "M32DF",
          Duree: 2,
          Niveau: " Lycee",
          Capacite: "300"
        },
      
        {
           Nom: "Litteraire",
          Code: "L32JL",
          Duree: 2,
          Niveau: " Lycee",
          Capacite: "300"
        },
       
       
      ];
    },

    editItem(item) {
      this.editedIndex = this.profs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.profs.indexOf(item);
      confirm("Etes-vous sur de vouloir supprimer cet element?") &&
        this.profs.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.profs[this.editedIndex], this.editedItem);
      } else {
        this.profs.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>