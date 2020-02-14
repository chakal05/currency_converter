<template>
  <v-layout column align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="mx-auto" width="370" shaped>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              Baccalauréat Général
            </v-list-item-title>
            <v-list-item-subtitle>
              Session de Juin {{ new Date().getFullYear() }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-data-iterator
          :items="items"
          hide-default-footer
        >
          <template v-slot:default="props">
            <v-row>
              <v-col v-for="item in props.items" :key="item.id" cols="12">
                <v-card >
                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Nom :</v-list-item-content>
                      <v-spacer />
                      <v-list-item-content class="align-end">
                        {{ item.name }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>
                        Numéro d'inscription :
                      </v-list-item-content>
                      <v-spacer />
                      <v-list-item-content class="align-end">
                        {{ item.studentNumber }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Établissement :</v-list-item-content>
                      <v-spacer />
                      <v-list-item-content class="align-end">
                        {{ item.schoolName }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Liste :</v-list-item-content>
                      <v-spacer />
                      <v-list-item-content class="align-end">
                        {{ item.list }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Mention :</v-list-item-content>
                      <v-spacer />
                      <v-list-item-content class="align-end">
                        {{ item.mention }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      

        <v-card-actions>
          <v-btn color='primary' text to="/">
            Se deconnecter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: 'results',
    data: () => ({
        items:[
            {
                name: 'Omar Ali Omar',
                studentNumber: '20092T',
                schoolName: 'Lycee de Dikhil',
                list:'Premier groupe',
                mention: 'Bien'

            }
        ]
    })
}
</script>

<style lang="scss" scoped>
  .layout {
    .flex {
      margin-top: 11rem;
      @media screen and (max-width: 414px) and (min-width: 321px) {
        margin-top: 3rem;
      }
      .v-card {
        @media screen and (max-width: 414px) {
          width: 400px;
        }
      }
    }
  }
</style>
