import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(3),
		minHeight: 500,
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	papier: {
		padding: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(3),
		width: '85%',
		margin: ' auto',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	pos: {
		marginTop: 10,
	},
	red: {
		color: 'red',
	},
}));

function App() {
	const classes = useStyles();
	const [amount, setAmount] = useState('');
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [ratesData, setData] = useState('');
	const [result, setResult] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [curr, setCurr] = useState('');
	const getData = async () => {
		await axios
			.get('https://api.exchangerate-api.com/v4/latest/USD')
			.then((response) => {
				setData(response.data);
			});
	};
	useEffect(() => {
		getData();
	}, []);

	const convert = () => {
		if (amount === '' || typeof amount === 'string' ) {
			setErrorMessage('Please, enter amount');
			return;
		}

		if (from === to) {
			setErrorMessage(
				`Base and target currency must not be the same`
			);
			return;
		}

		if (amount && !isNaN(amount)) {
			setCurr(to);
			// Retrieve date
			setDate(ratesData.date);

			// Get time

			setTime(
				new Date()
					.toTimeString(ratesData.time_last_updated)
					.substr(0, 8)
			);

			// Base curency => USD

			if (from === 'USD') {
				switch (to) {
					case 'SEK':
						return setResult(
							(amount * ratesData.rates.SEK).toFixed(4)
						);
					case 'DKK':
						return setResult(
							(amount * ratesData.rates.DKK).toFixed(4)
						);
					case 'EUR':
						return setResult(
							(amount * ratesData.rates.EUR).toFixed(4)
						);
					case 'NOK':
						return setResult(
							(amount * ratesData.rates.NOK).toFixed(4)
						);
					default:
						break;
				}
			}

			// Base curency = SEK

			if (from === 'SEK') {
				let base = amount / ratesData.rates.SEK;

				switch (to) {
					case 'USD':
						return setResult(base.toFixed(4));
					case 'DKK':
						return setResult(
							(base * ratesData.rates.DKK).toFixed(4)
						);
					case 'EUR':
						return setResult(
							(base * ratesData.rates.EUR).toFixed(4)
						);
					case 'NOK':
						return setResult(
							(base * ratesData.rates.NOK).toFixed(4)
						);
					default:
						break;
				}
			}

			// Base curency = DKK
			if (from === 'DKK') {
				let base = amount / ratesData.rates.DKK;

				switch (to) {
					case 'USD':
						return setResult(base.toFixed(4));
					case 'SEK':
						return setResult(
							(base * ratesData.rates.SEK).toFixed(4)
						);
					case 'EUR':
						return setResult(
							(base * ratesData.rates.EUR).toFixed(4)
						);
					case 'NOK':
						return setResult(
							(base * ratesData.rates.NOK).toFixed(4)
						);
					default:
						break;
				}
			}

			// Base curency = EUR
			if (from === 'EUR') {
				let base = amount / ratesData.rates.EUR;

				switch (to) {
					case 'USD':
						return setResult(base.toFixed(4));
					case 'DKK':
						return setResult(
							(base * ratesData.rates.DKK).toFixed(4)
						);
					case 'SEK':
						return setResult(
							(base * ratesData.rates.SEK).toFixed(4)
						);
					case 'NOK':
						return setResult(
							(base * ratesData.rates.NOK).toFixed(4)
						);
					default:
						break;
				}
			}

			// Base curency = NOK
			if (from === 'NOK') {
				let base = amount / ratesData.rates.NOK;

				switch (to) {
					case 'USD':
						return setResult(base.toFixed(4));
					case 'SEK':
						return setResult(
							(base * ratesData.rates.SEK).toFixed(4)
						);
					case 'EUR':
						return setResult(
							(base * ratesData.rates.EUR).toFixed(4)
						);
					case 'DKK':
						return setResult(
							(base * ratesData.rates.DKK).toFixed(4)
						);
					default:
						break;
				}
			}
		}
	};
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position='absolute'
				color='default'
				className={classes.appBar}>
				<Toolbar>
					<Typography variant='h6' color='inherit' noWrap>
						ScanCurr
					</Typography>
				</Toolbar>
			</AppBar>
			<main className={classes.layout}>
				<Paper className={classes.paper} elevation={5}>
					<Typography
						component='h1'
						variant='h4'
						align='center'
						style={{ paddingTop: '1rem' }}>
						Currency converter
					</Typography>
					<Grid container spacing={3}>
						<Paper className={classes.papier}>
							<Grid item xs={12}>
								<TextField
									id='outlined-basic'
									label='Amount'
									variant='outlined'
									onChange={(e) => {
										let val = e.target.value;
										if (parseInt(val)) setAmount(val);
									}}
								/>
							</Grid>
							<Grid container style={{ marginTop: '3rem' }}>
								<Grid item xs={5}>
									<FormControl
										className={classes.formControl}>
										<InputLabel id='demo-simple-select-label'>
											From
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											id='demo-simple-select'
											value={from}
											onChange={(e) =>
												setFrom(e.target.value)
											}>
											<MenuItem value={'USD'}>
												US Dollar
											</MenuItem>
											<MenuItem value={'EUR'}>
												Euro
											</MenuItem>
											<MenuItem value={'SEK'}>
												Swedish Krone
											</MenuItem>
											<MenuItem value={'DKK'}>
												Danish Krone
											</MenuItem>
											<MenuItem value={'NOK'}>
												Norwegian Krone
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>

								<Grid item xs={2}>
									<FontAwesomeIcon
										style={{
											fontSize: '1.5rem',
											marginTop: '1.7rem',
										}}
										icon={faArrowRight}
									/>
								</Grid>

								<Grid item xs={5}>
									<FormControl
										className={classes.formControl}>
										<InputLabel id='demo-simple-select-label'>
											To
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											id='demo-simple-select'
											value={to}
											onChange={(e) => {
												setTo(e.target.value);
											}}>
											<MenuItem value={'USD'}>
												US Dollar
											</MenuItem>
											<MenuItem value={'EUR'}>
												Euro
											</MenuItem>
											<MenuItem value={'SEK'}>
												Swedish Krone
											</MenuItem>
											<MenuItem value={'DKK'}>
												Danish Krone
											</MenuItem>
											<MenuItem value={'NOK'}>
												Norwegian Krone
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12} style={{ margin: '3rem' }}>
									<Button
										variant='contained'
										onClick={() => {
											convert();
										}}>
										{' '}
										Convert{' '}
									</Button>
								</Grid>
								<Grid item xs={12} align='center'>
									{errorMessage !== undefined &&
										result === '' && (
											<p className={classes.red}>
												{' '}
												{errorMessage}{' '}
											</p> // red color here
										)}
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Paper>
				<Paper elevation={5}>
					<Card
						className={classes.root}
						align='center'
						variant='outlined'>
						{result === '' && (
							<Typography
								component='h1'
								variant='h4'
								align='center'
								style={{ padding: '1rem' }}>
								Start converting...
							</Typography>
						)}

						{result !== '' && (
							<CardContent>
								<Typography
									className={classes.title}
									color='textSecondary'
									gutterBottom>
									Result
								</Typography>
								<Typography variant='h5' component='h2'>
									{result} {curr}
								</Typography>
								<Typography
									className={classes.pos}
									color='textSecondary'>
									Updated :
								</Typography>
								<Typography variant='body2' component='p'>
									{date} at {time}
								</Typography>
							</CardContent>
						)}
					</Card>
				</Paper>
				<Typography
					variant='body2'
					color='textPrimary'
					align='center'
					style={{ marginTop: '3rem', marginBottom: '3rem' }}>
					{'Copyright © '}

					{new Date().getFullYear()}
					{'.'}
				</Typography>
			</main>
		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
