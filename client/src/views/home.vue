
<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="#21398a" dark flat>
              <div class="logoIcon">
                     <v-toolbar-title class="mr-5 align-center">
                      <span>manedek</span>
                          <v-icon >trending_up</v-icon>
                    </v-toolbar-title> 
                  </div>
                <div class="flex-grow-1"></div>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    
                  </template>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Nom" name="login" prepend-icon="person" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Mot de passe"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn>Connexion</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
export default {
  name: "landingPage",
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
// small screen
@mixin small {
  @media (max-width: 320px) {
    @content;
  }
}
// tablets
@mixin ipad {
  @media (min-width: 768px) {
    @content;
  }
}
// desktop
@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}
#inspire {
  .v-btn.v-size--default {
    background-color: #21398a !important;
    color: #fff;
  }

  .logoIcon{
    margin-left: .5rem;
  span{
    font-size: 2rem;
  }
    i{
      position: relative;
      top: -.25rem;
      left: -.35rem;
      font-size: 2.4rem;
    }
  }
}
</style>
