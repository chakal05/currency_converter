<template>
  <v-container>
    <v-row class="firstRow">

      <v-card class="mx-auto" max-width="250">
        <v-img
          class="white--text"
          height="200px"
          src="../assets/adri.jpeg"
        >
           </v-img>

        <v-card-text>
         
          <span class="text--primary">
            <span>Moussa Souleiman</span>
            <br />
            <span>Directeur</span>
          </span>
        </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        contacter
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        profil
      </v-btn>
    </v-card-actions>
      </v-card>
    </v-row>

    <v-row class="secondRow">
      <v-card class="mx-auto" max-width="200">
        <v-img
          class="white--text"
          height="250px"
          src="../assets/directrice.jpeg"
        >
         </v-img>

        <v-card-text>
          <span class="text--primary">
            <span>Amina Ahmed</span>
            <br />
            <span>Directrice pédagogique</span>
          </span>
        </v-card-text>
<v-card-actions>
      <v-btn
        text
        color="orange"
      >
        contacter
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        profil
      </v-btn>
    </v-card-actions>
      
      </v-card>

        <v-card class="mx-auto" max-width="200">
        <v-img
          class="white--text"
          height="250px"
          src="../assets/responsable.jpeg"
        >
        </v-img>

        <v-card-text>
          <span class="text--primary">
            <span>Halima Mohamed</span>
            <br />
            <span>Responsable vie scolaire </span>
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="orange">contacter</v-btn>
          <v-btn text color="orange">profil</v-btn>
        </v-card-actions>
      </v-card>

        <v-card class="mx-auto" max-width="200">
        <v-img
          class="white--text"
          height="250px"
          src="../assets/comptable.png"
        >
         </v-img>

        <v-card-text>
          <span class="text--primary">
            <span>Salah Ali </span>
            <br />
            <span>Comptable</span>
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="orange">Contacter</v-btn>
          <v-btn text color="orange">Profil</v-btn>
        </v-card-actions>
      </v-card>

          <v-card class="mx-auto" max-width="200">
        <v-img
          class="white--text"
          height="250px"
          src="../assets/securite.jpeg"
        >
          </v-img>

        <v-card-text>
          <span class="text--primary">
            <span>Jamal Muhyadin</span>
            <br />
            <span>Securite et jardinnage</span>
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="orange">Contacter</v-btn>
          <v-btn text color="orange">profil </v-btn>
        </v-card-actions>
      </v-card>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
   
  }),

  methods: () => ({})
};
</script>

<style lang="scss" scoped>


.secondRow {
  .v-card{
    margin-top: 3rem;
  }
}
</style>