<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <div class="logo-gris">
          <v-app-bar-nav-icon class="bar" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="mr-5 align-center">
            <span>manedek</span>
          </v-toolbar-title>
          <v-icon class="laughI">trending_up</v-icon>
        </div>
        <v-list>
          <template>
            <v-list-item @click="dashboarde">
              <v-list-item-icon>
                <v-icon>home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tableau de bord</v-list-item-title>
            </v-list-item>

            <v-list-group prepend-icon="people">
              <template v-slot:activator>
                <v-list-item-title>Management</v-list-item-title>
              </template>

              <v-list-item @click="organigramme">
                <v-list-item-title>Organigramme</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>contacts</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="description">
              <template v-slot:activator>
                <v-list-item-title>Scolarites</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Management</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>people</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="account_circle">
              <template v-slot:activator>
                <v-list-item-title>Comptes</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Management</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>people</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="settings">
              <template v-slot:activator>
                <v-list-item-title>Parametres</v-list-item-title>
              </template>

              <v-list-item>
                <v-list-item-title>Management</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>people</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left color="#21398a">
        <v-app-bar-nav-icon color="#fff" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-5 align-center">
          <span class="title">manedek</span>
        </v-toolbar-title>
        <v-icon color="#fff" class="mx-3">trending_up</v-icon>

        <v-spacer></v-spacer>

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
              <dashboard v-if="first"></dashboard>
              <organigramme v-if="organigramm"></organigramme>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>



<script>
import organigramme from "../components/organigrame";
import dashboard from "../components/dashboardDir";
export default {
  name: "supadmin",
  components: {
    dashboard,
    organigramme
  },
  props: {
    source: String
  },

  data: () => ({
    dialog: false,
    drawer: null,
    first: true,
    organigramm: false,

    admins: [["Management", "people_outline"], ["Settings", "settings"]],
    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ],

  
  }),
  methods: {
    organigramme: function() {
      this.first = false;
      this.organigramm = true;
    },

    dashboarde : function() {
      this.first = true;
      this.organigramm = false;
    }
,
    
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  }
};
</script>
<style lang='scss' scoped>
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
  }
  .v-btn__content {
    i {
      font-size: 23px;
    }
  }
  .mx-3 {
    position: relative;
    left: -2.4rem;
    top: 0.08rem;
    font-size: 35px;
  }
  .v-list-item__content {
    a {
      text-decoration: none;
      .v-list-item__title {
        color: black;
      }
    }
    a:hover .v-list-item__title {
      font-size: 14px;
    }
  }
  .logo-gris {
    display: flex;
    justify-content: baseline;
    align-items: baseline;

    @include desktop {
      display: none;
    }
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }

    .laughI {
      font-size: 35px;
      position: relative;
      left: -1.59rem;
      top: 0.5rem;
      color: #282828;
    }

    .bar {
      margin-left: 0.6rem;
      margin-top: 0.5rem;
    }
  }
}
</style>