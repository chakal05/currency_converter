<template>
	<v-app>
		<v-content class="content">
			<v-container fluid>
				<v-row class="section" align="center" justify="center">
					<v-card elevation="12" width="100%" height="auto">
						<v-card-title>
							<v-icon color="white">fas fa-dollar-sign</v-icon>
							<v-toolbar-title
								class=" display-2 white--text font-weight-bold"
							>
								Currency Converter</v-toolbar-title
							>
						</v-card-title>
						<v-card-text>
							<v-row justify="center" align="center">
								<v-col class="amount " cols="12" sm="6">
									<v-text-field
										dark
										outlined
										v-model="amount"
										label="Amount"
										:rules="currency"
										clearable
										@click="empty()"
									></v-text-field>
								</v-col>
							</v-row>
							<v-row justify="center" align="center">
								<v-col class="base " cols="12" sm="4">
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

								<v-col
									class="text-center arrows"
									cols="12"
									sm="2"
								>
									<v-btn icon>
										<v-icon
											@click="inverse"
											color="white"
											large
											>fas fa-arrows-alt-h
										</v-icon></v-btn
									>
								</v-col>

								<v-col class="target" cols="12" sm="4">
									<v-select
										dark
										v-model="target"
										:hint="
											`${target.money}, ${target.abbr}`
										"
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
									<v-btn @click="convert" class="mt-5"
										>Convert
									</v-btn>
								</v-col>
							</v-row>
						</v-card-text>

						<div v-if="!err" class="result">
							<div
								v-if="enter"
								class="text-center ma-5  white--text"
							>
								<h1>Enter amount</h1>
							</div>

							<v-col
								v-if="curr"
								class="text-center  white--text"
								cols="12"
							>
								<h1>
									{{ result }}
									<span>{{ target.abbr }}</span>
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
		</v-content>
	</v-app>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'index',
		data() {
			return {
				base: {
					money: 'Dollars',
					abbr: 'USD',
				},
				target: {
					money: 'Swedish Krone',
					abbr: 'SEK',
				},
				items: [
					{ money: 'Dollars', abbr: 'USD' },
					{
						money: 'Danish Krone',
						abbr: 'DKK',
					},
					{ money: 'Euro', abbr: 'EUR' },
					{
						money: 'Swedish Krone',
						abbr: 'SEK',
					},
					{
						money: 'Norwegian Krone',
						abbr: 'NOK',
					},
				],
				result: null,
				curr: false,
				err: false,
				amount: null,
				error: null,
				enter: true,
				date: null,
				time: null,
				currency: [
					(v) => !isNaN(v) || 'Currency input expects a number',
				],
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
						.get(
							'https://api.exchangerate-api.com/v4/latest/USD'
						)
						.then((response) => {
							this.curr = true;
							this.enter = false;

							// Retrieve date
							this.date = response.data.date;

							// Get time

							this.time = new Date()
								.toTimeString(response.data.time_last_updated)
								.substr(0, 8);

							// Base curency => USD

							if (this.base.abbr === 'USD') {
								if (this.target.abbr === 'SEK') {
									res =
										this.amount * response.data.rates.SEK;
								} else if (this.target.abbr === 'DKK') {
									res =
										this.amount * response.data.rates.DKK;
								} else if (this.target.abbr === 'EUR') {
									res =
										this.amount * response.data.rates.EUR;
								} else if (this.target.abbr === 'NOK') {
									res =
										this.amount * response.data.rates.NOK;
								}

								return (this.result = res.toFixed(4));
							}

							// Base curency = SEK

							if (this.base.abbr === 'SEK') {
								let base =
									this.amount / response.data.rates.SEK;
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
								let base =
									this.amount / response.data.rates.DKK;
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
								let base =
									this.amount / response.data.rates.EUR;
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
								let base =
									this.amount / response.data.rates.NOK;
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
						.catch((err) => {
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

<style lang="scss" scoped>
	@mixin ipad {
		@media screen and (max-width: 800px) {
			@content;
		}
	}

	@mixin phone {
		@media screen and (max-width: 500px) {
			@content;
		}
	}

	@mixin smalPhone {
		@media screen and (max-width: 321px) {
			@content;
		}
	}

	.v-application {
		.v-content {
			background: #1f1c18;
			.container {
				width: 800px;

				.row {
					.v-card {
						background: #550c03;
						margin: 1rem;
						margin-top: 5rem;

						@include ipad {
							margin-top: 1rem;
						}

						@include phone {
							width: 90% !important;
							//	height: 750px !important;
							margin-top: 0;
						}

						.v-card__title {
							margin-top: 1rem;
							margin-bottom: 3rem;
							.v-icon {
								font-size: 2rem;
								margin-right: 5px;
							}

							.display-2 {
								@include phone {
									font-size: 2rem !important;
								}

								@include smalPhone {
									font-size: 1.5rem !important;
								}
							}
						}

						.v-card__text {
							border: 2px solid white;
							border-radius: 0.5rem;
							padding: 2rem;
							width: 95%;
							margin: 0 auto;
							margin-bottom: 5rem;
							@include phone {
								margin-bottom: 1rem;
							}
							.arrows {
								padding-top: 1.5rem;
							}
						}

						.result {
							border: 2px solid white;
							width: 60%;
							border-radius: 0.5rem;
							margin: 0 auto;
							margin-bottom: 5rem;

							@include phone {
								margin-bottom: 3rem;
								margin-top: 3rem;
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
		}
	}
</style>
