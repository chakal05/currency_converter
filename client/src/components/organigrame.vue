<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>

        <div class="flex-grow-1"></div>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
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
                   <v-avatar size=32>
                     <v-img v-bind:src="editedItem.Photo" > </v-img>
                   </v-avatar>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Matière" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Email" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Téléphone" label="Protein (g)"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
      <v-btn color="primary" @click="initialize">Reset</v-btn>
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
      { text: "Photo", value: "Photo" },
      { text: "Matière", value: "Matière" },
      { text: "Email", value: "Email" },
      { text: "Téléphone", value: "Téléphone" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      Nom: "",
      Photo: 0,
      Matière: 0,
      Email: 0,
      Téléphone: 0
    },
    defaultItem: {
      Nom: "",
      Photo: 0,
      Matière: 0,
      Email: 0,
      Téléphone: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          Nom: "Frozen Yogurt",
          Photo:  "../assets/comptable.png",
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          Nom: "Ice cream sandwich",
          Photo: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          Nom: "Eclair",
          Photo: "../assets/comptable.png",
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          Nom: "Cupcake",
          Photo: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          Nom: "Gingerbread",
          Photo: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          Nom: "Jelly bean",
          Photo: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          Nom: "Lollipop",
          Photo: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          Nom: "Honeycomb",
          Photo: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          Nom: "Donut",
          Photo: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          Nom: "KitKat",
          Photo: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Etes-vous sur de vouloir supprimer cet element?") &&
        this.desserts.splice(index, 1);
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
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  margin-top: 1rem;
}
</style>