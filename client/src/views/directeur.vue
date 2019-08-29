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
        <v-list dense>
          <template v-for="item in items">
            <v-row v-if="item.heading" :key="item.heading" align="center">
              <v-col cols="6">
                <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
              </v-col>
              <v-col cols="6" class="text-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-col>
            </v-row>

            <v-list-group
              v-else-if="item.children"
              :key="item.text"
              v-model="item.model"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon
            >
              <template v-slot:activator>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
              <v-list-item v-for="(child, i) in item.children" :key="i">
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <a href="#">
                    <v-list-item-title>{{ child.text }}</v-list-item-title>
                  </a>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-list-item v-else :key="item.text">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <a href="#">
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </a>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left color="#21398a">
        <v-app-bar-nav-icon color="#fff" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-5 align-center">
          <span class="title">manedek</span>
        </v-toolbar-title>
        <v-icon color="#fff" class="mx-3"> trending_up</v-icon>

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
            <v-flex shrink>
              <v-tooltip right>
                <span>Codepen</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "supadmin",
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Statistiques",
        model: false,
        children: [{ text: "Inscriptions" }, { text: "Financières" }]
      },
      { text: "Organigramme", icon: "contacts" },
      {
        text: "Plateforme",
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Ressources Humaines",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Répartition annuelle",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Demandes d'admission",
        model: false,
        children: [
          { text: "Demande d'admission" },
          { text: "Listes de tests d'admission" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Scolarité",
        model: false,
        children: [
          { text: "Elèves" },
          { text: "Inscriptions" },
          { text: "Elèves par classe" },
          { text: "Autorisations d'absences" },
          { text: "Reclamations" },
          { text: "Demande de rendez-vous" },
          { text: "Demande d'attestations" },
          { text: "Listing" },
          { text: "Listes des conditions" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Emploi du temps",
        model: false,
        children: [
          { text: "Séances de cours" },
          { text: "Disponibilités des vacataires" },
          { text: "Horaires de l'école" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Avancement",
        model: false,
        children: [
          { text: "Avancement journalier" },
          { text: "Réqlisqtions pqr professeur" },
          { text: "Réalisations par classe" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Test QCM",
        model: false,
        children: [
          { text: "Questions par composante" },
          { text: "Questionnaires" },
          { text: "Difficultés des questions" },
          { text: "Poster des tests" }
        ]
      },
      { icon: "keyboard", text: "Nouvelles" },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Activités parascolaires",
        model: false,
        children: [
          { text: "Activités  ..." },
          { text: "Calendrier" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Transport",
        model: false,
        children: [
          { text: "Trajet" },
          { text: "Véhicules" },
          { text: "Fournisseurs" },
          { text: "Absences" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Gestion financière",
        model: false,
        children: [
          { text: "Retards des paiements" },
          { text: "Paiements des élèves" },
          { text: "Fiche de paiement" },
          { text: "Gestion des caissses" },
          { text: "Mouvements de la caisse" },
          { text: "Transfer d'argent" },
          { text: "Versement à la banque" },
          { text: "Packs des services" },
          { text: "Tarifs des services" },
          { text: "Periodicité des paiments" }
        ]
      },
      { icon: "keyboard", text: "Réglement intérieur" },
      { icon: "keyboard", text: "Charte de travail" },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Journal des opérations",
        model: false,
        children: [
          { text: "Retards des paiements" },
          { text: "Paiements des élèves" },
          { text: "Fiche de paiement" },
          { text: "Gestion des caissses" },
          { text: "Other contacts" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Paramètres",
        model: false,
        children: [
          { text: "Gestion des utilisateurs" },
          { text: "Mises à jour" },
          { text: "Annees scolaires" },
          { text: "Gestion des caisses" },
          { text: "Diplomes" },
          { text: "Professeurs" },
          { text: "Formations" },
          { text: "Niveaux scolaires" },
          { text: "Nature des matières" },
          { text: "Diplomes" },
          { text: "Sanctions" }
        ]
      }
    ]
  })
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
    top: .08rem;
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
      top: .5rem;
      color: #282828;
    }

    .bar {
      margin-left: 0.6rem;
      margin-top: 0.5rem;
    }
  }
}
</style>