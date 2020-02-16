<template>
  <v-container fluid>
    <v-row class="section" align="center" justify="center">
      <v-card elevation='0' width="90%" height="500">
        <v-card-title>
          <v-icon color="white">fas fa-dollar-sign</v-icon>
          <v-toolbar-title class=" display-1 white--text font-weight-regular">
            Currency Converter</v-toolbar-title
          >
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col class="amount " cols="12" sm="3">
              <v-text-field
                dark
                v-model="amount"
                label="Amount"
                :rules="currency"
                clearable
                @click="empty()"
              ></v-text-field>
            </v-col>

            <v-col class="base " cols="12" sm="2">
              <v-select
                dark
                v-model="base"
                :hint="`${base.money}, ${base.abbr}`"
                :items="items"
                item-text="money"
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
                <v-icon @click="inverse" color="white" large
                  >fas fa-arrows-alt-h
                </v-icon></v-btn
              >
            </v-col>

            <v-col class="target" cols="12" sm="2">
              <v-select
                dark
                v-model="target"
                :hint="`${target.money}, ${target.abbr}`"
                :items="items"
                item-text="money"
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

        <div v-if="!err" class="result">
          <div v-if="enter" class="text-center ma-5  white--text">
            <h1>Enter amount</h1>
          </div>

          <v-col v-if="curr" class="text-center  white--text" cols="12">
            <h1>
              {{ result }} <span>{{ target.abbr }}</span>
            </h1>

            <h3>Updated : {{ date }} at {{ time }}</h3>
          </v-col>
        </div>

        <div v-if="err" class="erreur">
          <v-col class="text-center red--text" cols="12">
            <h3>{{ error }}</h3>
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
        base: { money: 'Dollars', abbr: 'USD' },
        target: { money: 'Swedish Krone', abbr: 'SEK' },
        items: [
          { money: 'Dollars', abbr: 'USD' },
          { money: 'Danish Krone', abbr: 'DKK' },
          { money: 'Euro', abbr: 'EUR' },
          { money: 'Swedish Krone', abbr: 'SEK' },
          { money: 'Norwegian Krone', abbr: 'NOK' },
        ],
        result: null,
        curr: false,
        err: false,
        error: null,
        enter: true,
        date: null,
        time: null,
        currency: [v => !isNaN(v) || 'Currency input expects a number'],
      };
    },
    methods: {
      async convert() {
        if (this.base.abbr === this.target.abbr) {
          this.error = `Base and target currency must not be the same`;
          this.err = true;
          this.curr = false;
          return;
        }

        if (this.amount && !isNaN(this.amount)) {
          let res;
          await axios
            .get('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => {
              this.curr = true;
              this.enter = false;

              // Retrieve date
              this.date = response.data.date;

              // Format time
              let h = new Date().getHours(response.data.time_last_updated);
              let hour = h < 10 ? '0' + h : h;
              let m = new Date().getMinutes(response.data.time_last_updated);
              let minute = m < 10 ? '0' + m : m;
              let s = new Date().getSeconds(response.data.time_last_updated);
              let second = s < 10 ? '0' + s : s;
              this.time = `${hour}:${minute}:${second}`;

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

                return (this.result = res.toFixed(4));
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

                return (this.result = res.toFixed(4));
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

                return (this.result = res.toFixed(4));
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

                return (this.result = res.toFixed(4));
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

                return (this.result = res.toFixed(4));
              }
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
        this.enter = true;
        this.err = false;
        this.error = null;
        this.amount = null;
      },

      inverse() {
        let a = this.base;
        let b = this.target;

        this.target = a;
        this.base = b;

        this.empty();
      },
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

    .row {
      .v-card {
       background:none;
        margin-top: 7rem;

        @include phone {
          width: 90% !important;
          height: 750px !important;
          margin-top: 0;
        }

        .v-card__title {
          margin-bottom: 5rem;
          .v-icon {
            font-size: 2rem;
            margin-right: 5px;
          }

          @include phone {
            margin-bottom: 0;
          }

          .display-1 {
            @include phone {
              font-size: 1.5rem !important;
            }
          }
        }

        .v-card__text {
          height: 100px;
          padding: 1rem;
          margin-bottom: 11rem;
          @include phone {
            margin-bottom: 1rem;
          }
          .arrows {
            padding-top: 1.5rem;
          }
        }

        .result {
          width: 90%;
          margin: 0 auto;

          @include phone {
            position: absolute;
            bottom: 2rem;
            left: 1rem;
          }
        }

        .erreur {
          margin-top: 7rem;
          width: 90%;
          margin: 0 auto;
          @include phone {
            position: absolute;
            bottom: 5rem;
            left: 1rem;
          }
        }
      }
    }
  }
</style>
