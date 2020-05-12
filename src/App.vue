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

						<div v-if="!errorTrue" class="result">
							<div
								v-if="defaultText"
								class="text-center ma-5  white--text"
							>
								<h1>Enter amount</h1>
							</div>

							<v-col
								v-if="resultTrue"
								class="text-center  white--text"
								cols="12"
							>
								<h1>
									{{ showResult }}
									<span>{{ target.abbr }}</span>
								</h1>

								<h3>Updated : {{ date }} at {{ time }}</h3>
							</v-col>
						</div>

						<div v-if="errorTrue" class="erreur">
							<v-col class="text-center red--text" cols="12">
								<h3>{{ errorMessage }}</h3>
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
				ratesData: null,
				showResult: null,
				resultTrue: false,
				errorTrue: false,
				amount: null,
				errorMessage: null,
				defaultText: true,
				date: null,
				time: null,
				currency: [
					(v) => !isNaN(v) || 'Currency input expects a number',
				],
			};
		},

		async created() {
			await axios
				.get('https://api.exchangerate-api.com/v4/latest/USD')
				.then((response) => {
					this.ratesData = response.data;
				});
		},
		methods: {
			async convert() {
				if (this.base.abbr === this.target.abbr) {
					this.errorMessage = `Base and target currency must not be the same`;
					this.errorTrue = true;
					this.resultTrue = false;
					return;
				}

				if (this.amount && !isNaN(this.amount)) {
					this.resultTrue = true;
					this.defaultText = false;

					// Retrieve date
					this.date = this.ratesData.date;

					// Get time

					this.time = new Date()
						.toTimeString(this.ratesData.time_last_updated)
						.substr(0, 8);

					// Base curency => USD

					if (this.base.abbr === 'USD') {
						switch (this.target.abbr) {
							case 'SEK':
								return (this.showResult = (
									this.amount * this.ratesData.rates.SEK
								).toFixed(4));
							case 'DKK':
								return (this.showResult = (
									this.amount * this.ratesData.rates.DKK
								).toFixed(4));
							case 'EUR':
								return (this.showResult = (
									this.amount * this.ratesData.rates.EUR
								).toFixed(4));
							case 'NOK':
								return (this.showResult = (
									this.amount * this.ratesData.rates.NOK
								).toFixed(4));
							default:
								break;
						}
					}

					// Base curency = SEK

					if (this.base.abbr === 'SEK') {
						let base = this.amount / this.ratesData.rates.SEK;

						switch (this.target.abbr) {
							case 'USD':
								return (this.showResult = base.toFixed(4));
							case 'DKK':
								return (this.showResult = (
									base * this.ratesData.rates.DKK
								).toFixed(4));
							case 'EUR':
								return (this.showResult = (
									base * this.ratesData.rates.EUR
								).toFixed(4));
							case 'NOK':
								return (this.showResult = (
									base * this.ratesData.rates.NOK
								).toFixed(4));
							default:
								break;
						}
					}

					// Base curency = DKK
					if (this.base.abbr === 'DKK') {
						let base = this.amount / this.ratesData.rates.DKK;

						switch (this.target.abbr) {
							case 'USD':
								return (this.showResult = base.toFixed(4));
							case 'SEK':
								return (this.showResult = (
									base * this.ratesData.rates.SEK
								).toFixed(4));
							case 'EUR':
								return (this.showResult = (
									base * this.ratesData.rates.EUR
								).toFixed(4));
							case 'NOK':
								return (this.showResult = (
									base * this.ratesData.rates.NOK
								).toFixed(4));
							default:
								break;
						}
					}

					// Base curency = EUR
					if (this.base.abbr === 'EUR') {
						let base = this.amount / this.ratesData.rates.EUR;

						switch (this.target.abbr) {
							case 'USD':
								return (this.showResult = base.toFixed(4));
							case 'DKK':
								return (this.showResult = (
									base * this.ratesData.rates.DKK
								).toFixed(4));
							case 'SEK':
								return (this.showResult = (
									base * this.ratesData.rates.SEK
								).toFixed(4));
							case 'NOK':
								return (this.showResult = (
									base * this.ratesData.rates.NOK
								).toFixed(4));
							default:
								break;
						}
					}

					// Base curency = NOK
					if (this.base.abbr === 'NOK') {
						let base = this.amount / this.ratesData.rates.NOK;

						switch (this.target.abbr) {
							case 'USD':
								return (this.showResult = base.toFixed(4));
							case 'SEK':
								return (this.showResult = (
									base * this.ratesData.rates.SEK
								).toFixed(4));
							case 'EUR':
								return (this.showResult = (
									base * this.ratesData.rates.EUR
								).toFixed(4));
							case 'DKK':
								return (this.showResult = (
									base * this.ratesData.rates.DKK
								).toFixed(4));
							default:
								break;
						}
					}
				} else {
					this.errorMessage = 'Please, enter an amount';
					this.errorTrue = true;
					this.resultTrue = false;
				}
			},

			empty() {
				this.showResult = null;
				this.resultTrue = false;
				this.defaultText = true;
				this.errorTrue = false;
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
		@media screen and (max-width: 600px) {
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
							//	margin-top: 7rem;
						}

						@include phone {
							width: 90% !important;
							padding-top: 0;
							height: auto;
							margin-top: 1rem;
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
								margin-top: 5rem;
							}
						}

						.erreur {
							width: 90%;
							margin: 0 auto;
							margin-bottom: 3rem;
						}
					}
				}
			}
		}
	}
</style>
