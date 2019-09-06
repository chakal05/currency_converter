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

              <template v-if="first">
                <v-row>
                  <v-col >
                    <v-sheet width="85%" height="750" class="calendrier">
                      <v-calendar
                        ref="calendar"
                        :now="today"
                        :value="today"
                        :events="events"
                        color="primary"
                        type="week"
                      >
                        <!-- the events at the top (all-day) -->
                        <template v-slot:day-header="{ date }">
                          <template v-for="event in eventsMap[date]">
                            <!-- all day events don't have time -->
                            <div
                              v-if="!event.time"
                              :key="event.title"
                              class="my-event"
                              @click="open(event)"
                              v-html="event.title"
                            ></div>
                          </template>
                        </template>
                        <!-- the events at the bottom (timed) -->
                        <template v-slot:day-body="{ date, timeToY, minutesToPixels }">
                          <template v-for="event in eventsMap[date]">
                            <!-- timed events -->
                            <div
                              v-if="event.time"
                              :key="event.title"
                              :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                              class="my-event with-time"
                              @click="open(event)"
                              v-html="event.title"
                            ></div>
                          </template>
                        </template>
                      </v-calendar>
                    </v-sheet>
                  </v-col>

                  <div class="cartes">
                    <v-card  outlined  color="#EF652F">
                      <v-list-item three-line>
                        <v-list-item-content >
                          <v-list-item-title  class="headline md-1">400</v-list-item-title>
                          <v-list-item-subtitle >Le nombre des inscrits</v-list-item-subtitle>
                        </v-list-item-content>

                      </v-list-item>

                    </v-card>
                    <v-card outlined color="#7EE420">
                      <v-list-item three-line>
                        <v-list-item-content  >
                          <v-list-item-title class="headline mb-1" >24</v-list-item-title>
                          <v-list-item-subtitle>Nombre des Pré-inscrits </v-list-item-subtitle>
                        </v-list-item-content>

                        </v-list-item>

                    </v-card>
                    <v-card outlined color="#223C8A">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title class=" white--text headline mb-1"> 0 </v-list-item-title>
                          <v-list-item-subtitle class="white--text">Le nombre d'abondons</v-list-item-subtitle>
                        </v-list-item-content>

                        </v-list-item>

                    </v-card>
                      <v-card  outlined color="#CD3A29">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title class=" white--text headline mb-1"> 0 </v-list-item-title>
                          <v-list-item-subtitle class="white--text" >Nombres des départs </v-list-item-subtitle>
                        </v-list-item-content>

                         </v-list-item>
                    </v-card>
                  </div>
                </v-row>
              </template>


              <template v-if="organigramme">

 <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
              <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>

              </template>


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
    first : true,
organigramme: false ,
//TOdo find a way to add methods to the 'items' so that on click something happens 


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
    ],
    today: "2019-01-08",
    events: [
      {
        name: "Weekly Meeting",
        start: "2019-01-07 09:00",
        end: "2019-01-07 10:00"
      },
      {
        name: "Thomas' Birthday",
        start: "2019-01-10"
      },
      {
        name: "Mash Potatoes",
        start: "2019-01-09 12:30",
        end: "2019-01-09 15:30"
      }
    ]
  }),
  methods : {

    organigramme() {
      this.data.items[1].organigramme = true;
    }
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

  .col {
    max-width: 80% !important;
  }

  .calendrier{
    margin: auto;
  }

  .cartes{

    padding-top: .4rem;

    .v-card{
      text-align: center;
      margin-top: 1rem;
      margin-right: 1rem;
      height: 170px;
      padding-top: 2rem;
    }

  }
 
}
</style>