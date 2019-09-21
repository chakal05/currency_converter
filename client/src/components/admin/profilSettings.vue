<template>
  <v-container>
    <v-row align="center" justify="center">
      <!-- To do : make changes accordingly    -->

      <v-col>
        <form @submit.prevent="sendFile" enctype="multipart/form-data">
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nom " required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="Adresse" required></v-text-field>
          <v-text-field label="Telephone"></v-text-field>
          <v-text-field label="Email"></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-file-input
            label="photo de profil"
            type="file"
            prepend-icon="mdi-camera"
            @change="selectFile"
          ></v-file-input>

          <v-btn color="success" class="mr-4" @click="validate">Validate</v-btn>

          <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  .row {
    .col {
      background-color: #fff;
    }
  }
}
</style>