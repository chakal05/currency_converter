<template>
    <div>
                <div class="premierTitre">
                  <h2>Tableau de bord</h2>
                </div>
                <v-row>
                  <v-col>
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
                    <v-card outlined color="#EF652F">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title class="headline md-1">400</v-list-item-title>
                          <v-list-item-subtitle>Le nombre des inscrits</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                    <v-card outlined color="#7EE420">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title class="headline mb-1">24</v-list-item-title>
                          <v-list-item-subtitle>Nombre des Pré-inscrits</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                    <v-card outlined color="#223C8A">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title class="white--text headline mb-1">0</v-list-item-title>
                          <v-list-item-subtitle class="white--text">Le nombre d'abondons</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                    <v-card outlined color="#CD3A29">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title class="white--text headline mb-1">0</v-list-item-title>
                          <v-list-item-subtitle class="white--text">Nombres des départs</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </div>
                </v-row>
      </div>  
</template>

<script>
export default {
data : () => ({
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
 mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  }
}
</script>

<style lang="scss">
.premierTitre{
    padding-left: 6rem;
    margin-bottom: 1rem;
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
</style>