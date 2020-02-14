<template>
  <v-container fluid>
    <div>
      <v-app-bar elevation="0" dark>
        <v-icon>fas fa-dollar-sign</v-icon>
      </v-app-bar>
    </div>

    <v-col cols="12" class="title">
      <v-toolbar-title class=" display-1 white--text font-weight-regular">
        Convert scandinavian currencies</v-toolbar-title
      >
    </v-col>
    <v-row class="section" align="center" justify="center">
      <v-card class="white--text" width="90%" height="500">
        <v-card-text>
          <v-row>
            <v-col class="amount " cols="12" sm="2">
              <v-text-field
                dark
                v-model="amount"
                label="Amount"
                :rules="currency"
                clearable
                @change="empty"
              ></v-text-field>
            </v-col>

            <v-col class="base" cols="12" sm="2">
              <v-select
                dark
                v-model="base"
                :hint="`${base.state}, ${base.abbr}`"
                :items="items"
                item-text="state"
                item-value="abbr"
                label="Select"
                persistent-hint
                return-object
                single-line
                @change="empty"
              >
                >
              </v-select>
            </v-col>

            <v-col class="text-center arrows" cols="12" sm="2">
              <v-btn icon>
                <v-icon color="white" large>fas fa-arrows-alt-h </v-icon></v-btn
              >
            </v-col>

            <v-col class="target" cols="12" sm="3">
              <v-select
                dark
                v-model="target"
                :hint="`${target.state}, ${target.abbr}`"
                :items="items"
                item-text="state"
                item-value="abbr"
                label="Select"
                persistent-hint
                return-object
                single-line
                @change="empty"
              >
                >
              </v-select>
            </v-col>

            <v-col class="text-center" cols="12" sm="3">
              <v-btn @click="convert" class="mt-5">Convert </v-btn>
            </v-col>
          </v-row>
        </v-card-text>

        <div v-if="curr" class="result">
          <v-col class="text-center" cols="12">
            <h1>
              {{ result }} <span>{{ target.abbr }}</span>
            </h1>

            <h3>Updated : {{ date }} at {{ time }}</h3>
          </v-col>
        </div>

        <div v-if="err" class="error">
          <v-col class="text-center " cols="12">
            <p color="white">{{ error }}</p>
          </v-col>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'index',
    data() {
      return {
        base: { state: 'Dollars', abbr: 'USD' },
        target: { state: 'Swdish Krone', abbr: 'SEK' },
        items: [
          { state: 'Dollars', abbr: 'USD' },
          { state: 'Danish Krone', abbr: 'DKK' },
          { state: 'Euro', abbr: 'EUR' },
          { state: 'Swedish Krone', abbr: 'SEK' },
          { state: 'Norwegian Krone', abbr: 'NOK' },
        ],
        result: null,
        usd: 1,
        amount: 1,
        curr: false,
        err: false,
        error: null,
        date: null,
        time: null,
        currency: [v => !isNaN(v) || 'Currency input expects a number'],
      };
    },
    methods: {
      async convert() {
        let res;
        if (this.base.abbr === this.target.abbr) {
          this.error = `Base and target currency are the same`;
          this.err = true;
          this.curr = false;
          return;
        }

        if (!isNaN(this.amount)) {
          await axios
            .get('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => {
              this.date = response.data.date;
              let h = new Date().getHours(response.data.time_last_updated);
              let m = new Date().getMinutes(response.data.time_last_updated);
              let s = new Date().getSeconds(response.data.time_last_updated);
              this.time = `${h}:${m}:${s}`;

              // Base curency = USD

              if (this.base.abbr === 'USD') {
                if (this.target.abbr === 'SEK') {
                  res = this.amount * response.data.rates.SEK;
                } else if (this.target.abbr === 'DKK') {
                  res = this.amount * response.data.rates.DKK;
                } else if (this.target.abbr === 'EUR') {
                  res = this.amount * response.data.rates.EUR;
                } else if (this.target.abbr === 'NOK') {
                  res = this.amount * response.data.rates.NOK;
                }
                this.curr = true;
              }

              // Base curency = SEK
              if (this.base.abbr === 'SEK') {
                let base = this.amount / response.data.rates.SEK;
                if (this.target.abbr === 'USD') {
                  res = base;
                } else if (this.target.abbr === 'DKK') {
                  res = base * response.data.rates.DKK;
                } else if (this.target.abbr === 'EUR') {
                  res = base * response.data.rates.EUR;
                } else if (this.target.abbr === 'NOK') {
                  res = base * response.data.rates.NOK;
                }
                this.curr = true;
              }

              // Base curency = DKK
              if (this.base.abbr === 'DKK') {
                let base = this.amount / response.data.rates.DKK;
                if (this.target.abbr === 'USD') {
                  res = base;
                } else if (this.target.abbr === 'SEK') {
                  res = base * response.data.rates.SEK;
                } else if (this.target.abbr === 'EUR') {
                  res = base * response.data.rates.EUR;
                } else if (this.target.abbr === 'NOK') {
                  res = base * response.data.rates.NOK;
                }
                this.curr = true;
              }

              // Base curency = EUR
              if (this.base.abbr === 'EUR') {
                let base = this.amount / response.data.rates.EUR;
                if (this.target.abbr === 'USD') {
                  res = base;
                } else if (this.target.abbr === 'DKK') {
                  res = base * response.data.rates.DKK;
                } else if (this.target.abbr === 'SEK') {
                  res = base * response.data.rates.SEK;
                } else if (this.target.abbr === 'NOK') {
                  res = base * response.data.rates.NOK;
                }
                this.curr = true;
              }

              // Base curency = NOK
              if (this.base.abbr === 'NOK') {
                let base = this.amount / response.data.rates.NOK;
                if (this.target.abbr === 'USD') {
                  res = base;
                } else if (this.target.abbr === 'DKK') {
                  res = base * response.data.rates.DKK;
                } else if (this.target.abbr === 'EUR') {
                  res = base * response.data.rates.EUR;
                } else if (this.target.abbr === 'SEK') {
                  res = base * response.data.rates.SEK;
                }
                this.curr = true;
              }

              return (this.result = res.toFixed(4));
            })
            .catch(err => {
              this.error = err;
              this.err = true;
              this.curr = false;
            });
        } else {
          this.error = 'Please, enter a number';
          this.err = true;
          this.curr = false;
        }
      },

      empty() {
        this.result = null;
        this.curr = false;
        this.err = false;
        this.error = null;
      },

      inverse() {},
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
  @mixin phone {
    @media screen and (max-width: 600px) {
      @content;
    }
  }
  .container {
    width: 800px;
    height: 100%;
    .v-app-bar {
      padding: 1rem;
      background: none !important;

      .v-icon {
        font-size: 5rem;
      }
    }

    .title {
      margin-top: 3rem;
      margin-bottom: 3rem;
      padding-left: 2rem;

      .display-1 {
        @media screen and (max-width: 1001px) {
          font-size: 1.7rem !important;
          font-weight: bold !important;
        }
        @include phone {
          font-size: 1.1rem !important;
          font-weight: bold !important;
        }
      }
    }
    .row {
      .v-card {
        background-color: #201c18;
        //   margin-top: 7rem;

        @include phone {
          width: 90% !important;
          height: 650px !important;
        }

        .col {
          margin-bottom: 5rem;
          @include phone {
            margin-bottom: 1rem;
          }
        }

        .v-card__text {
          height: 100px;
          padding: 1rem;
          .amount {
            padding-top: 0.7rem;
            .v-text-field {
              height: 56px;
            }
          }
          .base {
            .v-select {
              height: 56px;
            }
          }

          .arrows {
            padding-top: 1.5rem;
          }

          .target {
            .v-select {
            }
          }
        }

        .result {
          margin-top: 5rem;
          margin-bottom: 5rem;

          @include phone {
            margin-bottom: 0;
            margin-top: 0;
            position: absolute;
            bottom: 0;
            left: 20%;
            right: 20%;
          }
        }

        .error {
          margin-top: 5rem;

          @include phone {
            margin-top: 0;
            position: absolute;
            bottom: 1rem;
            left: 20%;
            right: 20%;
          }
        }
      }
    }
  }
</style>
