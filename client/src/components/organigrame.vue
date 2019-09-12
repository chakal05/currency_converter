<template>
  <v-container>

<template>

   <v-item-group>
        <v-container>
          <v-row>
            <v-item v-for="(item, i) in direction" :key="i">
              <v-card class="mx-auto" max-width="250">
                <v-img
                  class="white--text"
                  height="200px"
                  v-bind:src="require('../assets/' + item.source)"
                ></v-img>

                <v-card-text>
                  <span class="text--primary">
                    <span v-text="item.nom">Moussa Souleiman</span>
                    <br />
                    <span v-text="item.poste"></span>
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn text color="orange">contacter</v-btn>
                  <v-btn text color="orange">profil</v-btn>
                </v-card-actions>
              </v-card>
            </v-item>
          </v-row>
        </v-container>
      </v-item-group>
</template>
      
     


     <template >

  <v-item-group class='secondRow'>
    <v-container>
      <v-row>
        <v-item v-for="(item, i) in sousDirection" :key="i">
          <v-card class="mx-auto" max-width="230">
            <v-img
              class="white--text"
              height="200px"
              v-bind:src="require('../assets/' + item.source)"
            ></v-img>

            <v-card-text>
              <span class="text--primary">
                <span v-text="item.nom"></span>
                <br />
                <span v-text="item.poste"></span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="orange">contacter</v-btn>
              <v-btn text color="orange">profil</v-btn>
            </v-card-actions>
          </v-card>
        </v-item>
      </v-row>
    </v-container>
  </v-item-group>
     </template>


    
  <template>
     <v-item-group class='secondRow'>
    <v-container>
      <v-row>
        <v-item v-for="(item, i) in  sousSousDirection" :key="i">
          <v-card class="mx-auto" max-width="200">
            <v-img
              class="white--text"
              height="200px"
              v-bind:src="require('../assets/' + item.source)"
            ></v-img>

            <v-card-text>
              <span class="text--primary">
                <span v-text="item.nom"></span>
                <br />
                <span v-text="item.poste"></span>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="orange">contacter</v-btn>
              <v-btn text color="orange">profil</v-btn>
            </v-card-actions>
          </v-card>
        </v-item>
      </v-row>
    </v-container>
  </v-item-group>
  </template>

    
  </v-container>
</template>

<script>

//todo  Editing should have 3 options: add, update and delete
//? Do it here or create a new coponent ?

export default {
  data: () => ({
    direction: [
      { source: "adri.jpeg", nom: "Moussa Souleiman", poste: "Directeur" },
      {
        source: "directAd.jpeg",
        nom: "Mouna Ragueh",
        poste: "Directrice Adjointe"
      }
    ],

    sousDirection: [
      {
        source: "directrice.jpeg",
        nom: "Amina Ahmed",
        poste: "Directrice pedagogique"
      },
      {
        source: "responsable.jpeg",
        nom: "Halima Mohamed",
        poste: "Responsable vie scolaire"
      },
      { source: "comptable.png", nom: "Salah Ali ", poste: "Comptable" },
      {
        source: "securite.jpeg",
        nom: "Jamal Muhyadin ",
        poste: "Securite et jardinnage"
      }
    ],

    sousSousDirection: [
      {
        source: "surveillante.jpeg",
        nom: "Hanna Moussa",
        poste: "Surveillante"
      },
      { source: "surveillant.jpeg", nom: "Moumin Noor", poste: "Surveillant" },
      { source: "secretaire.jpeg", nom: "Ifrah Hassan ", poste: "Secretaire" },
      { source: "survellant1.png", nom: "Samatar Salah", poste: "Surveillant" },
      {
        source: "surveillante1.jpeg",
        nom: "Kadra Youssouf",
        poste: "Surveillante"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>

  .v-card {
    margin-top: 1rem;
  }

</style>