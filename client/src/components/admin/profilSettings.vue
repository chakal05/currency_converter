<template>
  <v-container>
    <v-row align="center" justify="center">
      <!-- To do : make changes accordingly    -->

      <v-col class="elevation-2">
        <v-row>
          <v-card-title>
            Mon profil
            <div class="flex-grow-1"></div>
          </v-card-title>
        </v-row>
        <form @submit.prevent="sendFile" enctype="multipart/form-data">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col cols="12" md="5">
              <v-text-field v-model="email"  label="Telephone" required></v-text-field>
            </v-col>

        

          <v-col cols="12" md="5">
              <v-file-input
                label="Changer la photo de profil"
                type="file"
                prepend-icon="mdi-camera"
                @change="selectFile"
              ></v-file-input>
            </v-col>
          </v-row>

          <v-text-field v-model="email" :rules="emailRules" label="Adresse" required></v-text-field>

          <v-row>
            
          </v-row>

          <v-row align="center" justify="center">
            <v-col>
              <v-btn color="success" class="mr-4" @click="validate">Validate</v-btn>
            </v-col>

            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
          </v-row>
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