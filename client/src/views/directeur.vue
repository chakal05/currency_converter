<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <div class="logo-gris">
          <v-app-bar-nav-icon class="bar" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="mr-5 align-center">
            <span>manedek</span>
            <v-icon class="trending">trending_up</v-icon>
          </v-toolbar-title>
        </div>

        <v-list dense>
          <template>
            <v-list-item @click="dashboarde">
              <v-list-item-icon>
                <v-icon>home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tableau de bord</v-list-item-title>
            </v-list-item>

            <v-list-group prepend-icon="contacts">
              <template v-slot:activator>
                <v-list-item-title>Personnel</v-list-item-title>
              </template>

              <v-list-item @click="personelAdmin">
                <v-list-item-title>Administration</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>fas fa-users-cog</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item @click="personelProf">
                <v-list-item-title>Professeurs</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>fas fa-chalkboard-teacher</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="description">
              <template v-slot:activator>
                <v-list-item-title>Scolarites</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Classes</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>view_module</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Demandes d'admission</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>person_add</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Inscription</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>add_box</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Autorisation d'absence</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>check_circle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Réclamations</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>fas fa-exclamation-triangle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Demandes de rendez-vous</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>add_circle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Demandes d'attestation</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>add_circle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-group sub-group no-action>
                <template v-slot:activator>
                  <v-list-content>
                    <v-list-item-title>Listes</v-list-item-title>
                  </v-list-content>
                </template>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>view_list</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Listes des inscrits</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>view_list</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Listes des pré-inscrits</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>view_list</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Listes des départs</v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>view_list</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Listes des abondons</v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-list-group>

          

            <v-list-group prepend-icon="alarm">
              <template v-slot:activator>
                <v-list-item-title>Emplois du temps</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Séances de cours</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Disponibilité des vacataires</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="book">
              <template v-slot:activator>
                <v-list-item-title>Journal des opérations</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Journal des professeurs</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Autre journal</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="fas fa-headphones">
              <template v-slot:activator>
                <v-list-item-title>Activités parascolaires</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Calendrier</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Catégories</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="fas fa-bus">
              <template v-slot:activator>
                <v-list-item-title>Transport</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Véhicules</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fournisseurs</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="fas fa-coins">
              <template v-slot:activator>
                <v-list-item-title>Gestion financière</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Payments réçus</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Payments en retard</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>far fa-circle</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="settings">
              <template v-slot:activator>
                <v-list-item-title>Parametres</v-list-item-title>
              </template>

              <v-list-item @click="ParametresGen">
                <v-list-item-title>Parametres generales</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>fas fa-cogs</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item @click="ParametresGen">
                <v-list-item-title>Parametres compte</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>account_circle</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left :color="defaultColor">
        <v-app-bar-nav-icon color="#fff" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="mr-5 align-center">
          <!--
          <span class="title">manedek</span>
          <v-icon color="#fff" class="mx-3">trending_up</v-icon>
          -->
          <v-img
             :src="require('../assets/logoPics/' + defaultLogo)"
            max-width="161"
            max-height="40"
          ></v-img>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="#fff">language</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="#fff">mail_outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="#fff">mdi-bell</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="#fff">account_circle</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <v-container fill-height>
          <v-layout justify-center align-center>
            <v-flex>
              <dashboardAdmin v-if="first"></dashboardAdmin>
              <personelProf v-if="personelPr"></personelProf>
              <personelAdministration v-if="personelAd"></personelAdministration>
              <parametresGen v-if="parametresGeneral"></parametresGen>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>



<script>
//todo Logo and app-bar color should be retrieved from db

import dashboardAdmin from "../components/admin/dashboardAdmin";
import personelAdministration from "../components/admin/personelAdmin";
import personelProf from "../components/admin/personelProf";
import parametresGen from "../components/admin/parametreGeneral";
import { mapState } from "vuex";

export default {
  name: "supadmin",
  components: {
    dashboardAdmin,
    personelProf,
    personelAdministration,
    parametresGen
  },
  props: {
    source: String
  },

  computed: {
    ...mapState(["defaultColor" , "defaultLogo"])
  },

  data: () => ({
    dialog: false,
    drawer: null,
    first: true,
    personelPr: false,
    personelAd: false,
    parametresGeneral: false,
    admins: [["Management", "people_outline"], ["Settings", "settings"]],
    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ]
  }),
  methods: {
    dashboarde: function() {
      this.first = true;
      this.personelPr = false;
      this.personelAd = false;
      this.parametresGeneral = false;
    },
    personelProf: function() {
      this.first = false;
      this.personelAd = false;
      this.parametresGeneral = false;
      this.personelPr = true;
    },

    personelAdmin: function() {
      this.first = false;
      this.personelPr = false;
      this.parametresGeneral = false;
      this.personelAd = true;
    },

    ParametresGen: function() {
      this.first = false;
      this.personelPr = false;
      this.personelAd = false;
      this.parametresGeneral = true;
    }
  }
};
</script>

<style lang='scss' scoped>
@mixin ipad {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: 992px) {
    @content;
  }
}

.v-application {
  .title {
    color: #fff;
    font-size: 2rem !important;
    margin-left: -1rem;

    @include ipad {
      font-size: 1.5rem !important;
    }
  }
  .v-btn__content {
    i {
      font-size: 23px;
    }
  }
  .mx-3 {
    position: relative;
    left: -1.1rem;
    top: -3px;
    font-size: 35px;
  }

  .logo-gris {
    display: flex;
    justify-content: baseline;
    align-items: baseline;

    @include desktop {
      display: none;
    }

    span {
      font-size: 1.5rem;
      margin-left: 1rem;
    }

    .trending {
      font-size: 35px;
      position: relative;
      left: -0.3rem;
      top: -0.13rem;
      color: #4e4c4c;
    }

    .bar {
      margin-left: 0.6rem;
      margin-top: 0.5rem;
    }
  }
}
</style>