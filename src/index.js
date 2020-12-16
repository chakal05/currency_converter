import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
	TextField,
	Container,
    InputAdornment,
    CssBaseline,
    Paper, Grid,
    MenuItem,
    Typography,
    Button
} from '@material-ui/core';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import logo from './assets/scancurrLogo.png';

function App() {
	const [amount, setAmount] = useState('');
	const [from, setFrom] = useState('USD');
	const [to, setTo] = useState('SEK');
	const [ratesData, setData] = useState([]);
	const [result, setResult] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [swedish, danish, euros, norsk] = ratesData;
	const getData = async () => {
		await axios
			.get('https://api.exchangerate-api.com/v4/latest/USD')
			.then((response) => {
				setDate(response.data.date);
				setTime(
					new Date()
						.toTimeString(response.data.time_last_updated)
						.substr(0, 8)
				);
				setData([
					response.data.rates.SEK,
					response.data.rates.DKK,
					response.data.rates.EUR,
					response.data.rates.NOK,
				]);
			})
			.catch((err) => {
				throw err;
			});
	};
		useEffect(() => {
			getData();
		}, []);
	
	const inverse = () => {
		let a = from;
		let b = to;
		setFrom(b);
		setTo(a);
	};

	const currencies = [
		{
			label: 'US Dollar',
			value: 'USD',
			rate: 1,
		},
		{
			label: 'Euro',
			value: 'EUR',
			rate: euros,
		},
		{
			label: 'Swedish Krone',
			value: 'SEK',
			rate: swedish,
		},
		{
			label: 'Danish Krone',
			value: 'DKK',
			rate: danish,
		},
		{
			label: 'Norwegian Krone',
			value: 'NOK',
			rate: norsk,
		},
	];
	const convert = () => {
		getData();

		if (amount === '' || isNaN(amount)) {
			setErrorMessage(
				'Please, enter a numeric value for the amount'
			);
			return;
		}

		if (from === to || to === from) {
			setErrorMessage(
				`Base and target currency must not be empty nor the same`
			);
			return;
		}

		if (amount && !isNaN(amount)) {
            
			// Set errorMessage to null
			setErrorMessage('');

			// Base curency => USD

			if (from === 'USD') {
				switch (to) {
					case 'SEK':
						return setResult((amount * swedish).toFixed(4));
					case 'DKK':
						return setResult((amount * danish).toFixed(4));
					case 'EUR':
						return setResult((amount * euros).toFixed(4));
					case 'NOK':
						return setResult((amount * norsk).toFixed(4));
					default:
						break;
				}
			}

			// Base curency = SEK

			if (from === 'SEK') {
				let base = amount / swedish;

				switch (to) {
					case 'USD':
						return setResult(base.toFixed(4));
					case 'DKK':
						return setResult((base * danish).toFixed(4));
					case 'EUR':
						return setResult((base * euros).toFixed(4));
					case 'NOK':
						return setResult((base * norsk).toFixed(4));
					default:
						break;
				}
			}

			// Base curency = DKK
			if (from === 'DKK') {
				let base = amount / danish;

				switch (to) {
					case 'USD':
						return setResult(base.toFixed(4));
					case 'SEK':
						return setResult((base * swedish).toFixed(4));
					case 'EUR':
						return setResult((base * euros).toFixed(4));
					case 'NOK':
						return setResult((base * norsk).toFixed(4));
					default:
						break;
				}
			}

			// Base curency = EUR
			if (from === 'EUR') {
				let base = amount / euros;

				switch (to) {
					case 'USD':
						return setResult(base.toFixed(4));
					case 'DKK':
						return setResult((base * danish).toFixed(4));
					case 'SEK':
						return setResult((base * swedish).toFixed(4));
					case 'NOK':
						return setResult((base * norsk).toFixed(4));
					default:
						break;
				}
			}

			// Base curency = NOK
			if (from === 'NOK') {
				let base = amount / norsk;

				switch (to) {
					case 'USD':
						return setResult(base.toFixed(4));
					case 'SEK':
						return setResult((base * swedish).toFixed(4));
					case 'EUR':
						return setResult((base * euros).toFixed(4));
					case 'DKK':
						return setResult((base * danish).toFixed(4));
					default:
						break;
				}
			}
		}
	};

	return (
		<div className='root'>
			<CssBaseline />

			<Container>
				<main className='layout'>
					<Paper className='paper' elevation={5}>
						<Grid
							className='box'
							container
							style={{ marginBottom: '2rem' }}>
							<Grid item xs={12} className='logoContainer'>
								<img
									src={logo}
									className='logo'
									alt='siteLogo'
								/>
							</Grid>

							<div className='fullGrid'>
								<TextField
									id='standard-select-currency'
									select
									value={from}
									variant='standard'
									label='From'
									className='field choose'
									onChange={(e) => {
										setResult('');
										return setFrom(e.target.value);
									}}>
									{currencies.map((option) => (
										<MenuItem
											key={option.value}
											value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
								<div className='amount'>
									<TextField
										onChange={(e) => {
											setAmount(e.target.value);
											setResult('');
										}}
										placeholder='Enter amount'
										InputProps={{
											endAdornment: (
												<InputAdornment position='end'>
													<p className='curr'>
														{amount && from}
													</p>
												</InputAdornment>
											),
										}}
									/>
								</div>
							</div>

							<div className='inverse'>
								<Button>
									<FontAwesomeIcon
										style={{
											fontSize: '1.5rem',
											marginTop: '1rem',
										}}
										icon={faArrowsAltH}
										onClick={inverse}
									/>
								</Button>
							</div>

							<div className='fullGrid'>
								<TextField
									id='standard-select-currency'
									select
									className='field choose'
									variant='standard'
									label='To'
									value={to}
									onChange={(e) => {
										setResult('');
										return setTo(e.target.value);
									}}>
									{currencies.map((option) => (
										<MenuItem
											key={option.value}
											value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>

								<div className='amount'>
									<TextField
										value={result}
										placeholder={'Awaiting...'}
										InputProps={{
											endAdornment: (
												<InputAdornment position='end'>
													<p className='curr'>
														{result && to}
													</p>
												</InputAdornment>
											),
										}}
									/>
								</div>
							</div>
							<Grid
								align='center'
								style={{ marginTop: '5rem' }}
								item
								xs={12}>
								<Button
									size='large'
									variant='contained'
									onClick={convert}>
									{' '}
									Convert{' '}
								</Button>
							</Grid>
						</Grid>

						<div>
							<Grid
								item
								xs={12}
								align='center'
								style={{
									marginTop: '3rem',
									marginBottom: '3rem',
								}}>
								{errorMessage !== '' && (
									<h3 className='red'> {errorMessage} </h3>
								)}
								{result && (
									<h3>
										{' '}
										Updated: {date} at {time}{' '}
									</h3>
								)}
								<Typography
									variant='body2'
									color='textPrimary'
									align='center'>
									{'Copyright © '}

									{new Date().getFullYear()}
									{'.'}
								</Typography>
							</Grid>
						</div>
					</Paper>
				</main>
			</Container>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
