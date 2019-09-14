<template>
  <v-data-table
    :headers="headers"
    :items="profs"
    :search="search"
    sort-by="matiere"
    class="elevation-1"
  >
    <template v-slot:top>
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
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Nom",
        align: "left",
        sortable: false,
        value: "Nom"
      },
      { text: "Matière", value: "Matière" },
      { text: "Email", value: "Email" },
      { text: "Téléphone", value: "Téléphone" },
      { text: "Actions", value: "action", sortable: false }
    ],
    profs: [],
    editedIndex: -1,
    editedItem: {
      Nom: "",
      Matière: 0,
      Email: 0,
      Téléphone: 0
    },
    defaultItem: {
      Nom: "",
      Matière: 0,
      Email: 0,
      Téléphone: 0
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
          Nom: "Farah Nour Mousa",
          Matière: "Francais",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Amina Ali Moumin",
          Matière: "Histoire/geographie",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Mathematique",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Khadra Souleiman Salah",
          Matière: "Mathematique",
          Email: "khadra@hotmail.com",
          Téléphone: 452243444
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Francais",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Amina Ali Moumin",
          Matière: "Histoire/geographie",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Mathematique",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Halima Mohamed Ali ",
          Matière: "Anglais",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Mathematique",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Khadra Souleiman Salah",
          Matière: "Mathematique",
          Email: "khadra@hotmail.com",
          Téléphone: 452243444
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Francais",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Mathematique",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Khadra Souleiman Salah",
          Matière: "Mathematique",
          Email: "khadra@hotmail.com",
          Téléphone: 452243444
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Francais",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Mathematique",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        },
        {
          Nom: "Khadra Souleiman Salah",
          Matière: "Mathematique",
          Email: "khadra@hotmail.com",
          Téléphone: 452243444
        },
        {
          Nom: "Farah Nour Mousa",
          Matière: "Francais",
          Email: "farah@hotmail.com",
          Téléphone: 343434344
        }
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