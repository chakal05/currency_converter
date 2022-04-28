import React from 'react';
import { useState, useEffect } from 'react';
import TheSelect from './Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowsAltH,
	faCoins,
	faArrowsUpDown,
} from '@fortawesome/free-solid-svg-icons';

function App() {
	const [from, setFrom] = useState({
		countryName: 'United States',
		currencycode: 'USD',
		countryCode: 'US',
		currencyName: 'United States Dollar',
	});
	const [to, setTo] = useState({
		currencycode: 'EUR',
		countryCode: 'EU',
		currencyName: 'Euro',
	});
	const [amount, setAmount] = useState(1);
	const [result, setResult] = useState('');
	const [data, setData] = useState({});
	const [errorMessage, setErrorMessage] = useState('');

	const getData = async () => {
		try {
			const currencies = await fetch(
				'https://api.exchangerate-api.com/v4/latest/USD'
			);
			const response = await currencies.json();
			const rates = response;
			setData(rates);
		} catch (error) {}
	};

	const convert = () => {
		const theRates = data.rates;
		const fromRate = theRates[from.currencycode];
		const toRate = theRates[to.currencycode];

		let exchange = (amount / fromRate) * toRate;

		setResult(exchange.toFixed(4));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='App'>
			<div className='bg-blue-900 h-96 '>
				<div className='xl:container font-serif'>
					<div className=' flex text-white p-2'>
						<FontAwesomeIcon
							icon={faCoins}
							style={{ fontSize: '2rem' }}
						></FontAwesomeIcon>
						<p className='font-black  text-2xl mx-1'> EXCHANGE </p>
					</div>
					{result && (
						<div className=' p-3  md:p-5 md:w-9/12 my-7 w-11/12 mx-auto text-center text-white  '>
							<p className=' text-lg md:text-2xl font-bold '>
								{`${amount} ${from.currencycode} to ${to.currencycode} -- Converted
						${from.currencyName}  to ${to.currencyName}`}
							</p>
						</div>
					)}
					{!result && (
						<div className='p-3 md:p-5 md:w-9/12 my-7 w-7/12 mx-auto text-center text-white'>
							<p className='font-bold text-2xl'> Currency Converter </p>
							<p> Live currency exchange rates</p>
						</div>
					)}
					<div className=' xl:p-5 bg-white shadow-lg p-3 w-11/12 mx-auto rounded-xl'>
						<div className='sm:flex'>
							<div className='sm:mx-2 w-full '>
								<label className='text-lg font-bold'> Amount </label>
								<input
									className='border-2 p-2 text-xl rounded w-full h-12'
									type='text'
									value={amount}
									onChange={(e) => {
										let val = Number(e.target.value);

										if (val === 0 || isNaN(val)) {
											setErrorMessage('Please enter valid amount ');
											setAmount(e.target.value);
										} else {
											if (val > 0) setAmount(val);
											setErrorMessage('');
										}
									}}
								/>
								{errorMessage && (
									<p className='text-rose-900'> {errorMessage} </p>
								)}
							</div>

							<div className='mt-12 sm:mt-0 sm:mx-2 w-full'>
								<TheSelect
									title='From'
									defaultVal={from}
									val={from}
									set={(e) => setFrom(e)}
								/>
							</div>
							<div className='text-center sm:flex-none'>
								<button
									className='text-center text-blue-900 border-2 border-blue-900  my-8 w-12   p-2  rounded-full'
									onClick={() => {
										const a = from;
										const b = to;
										setFrom(b);
										setTo(a);
									}}
								>
									<div className='hidden sm:block sm:-mb-1'>
										<FontAwesomeIcon
											style={{
												fontSize: '1.5rem',
											}}
											icon={faArrowsAltH}
										/>
									</div>

									<div className='sm:hidden'>
										<FontAwesomeIcon
											style={{
												fontSize: '1.5rem',
											}}
											icon={faArrowsUpDown}
										/>
									</div>
								</button>
							</div>
							<div className='sm:mx-2 w-full'>
								<TheSelect
									title='To'
									defaultVal={to}
									val={to}
									set={(e) => setTo(e)}
								/>
							</div>
						</div>

						<div className='sm:flex justify-between'>
							<div className='mt-12 '>
								{result && (
									<>
										<p className='font-bold text-xl'>
											{' '}
											{amount}
											<span className='text-gray-500 ml-2 text-lg'>
												{from.currencyName}{' '}
											</span>
											=
										</p>
										<p className='font-bold text-3xl'>
											{result}
											<span className=' ml-2 text-2xl'>{to.currencyName} </span>
										</p>
									</>
								)}
							</div>
							<div className='mt-12 mb-5 sm:mt-16 '>
								{' '}
								<button
									className={
										errorMessage
											? 'bg-blue-200 text-white w-full h-12 sm:w-36 rounded'
											: 'bg-blue-900 text-white w-full h-12 sm:w-36 rounded hover:bg-blue-700'
									}
									onClick={errorMessage ? '' : convert}
								>
									{' '}
									Convert{' '}
								</button>{' '}
							</div>
						</div>
					</div>

					<div className=' w-11/12 sm:w-9/12 mx-auto my-8 border-2 shadow-lg rounded-lg'>
						<p className='text-center text-2xl p-3 text-blue-900 bg-blue-50 mb-5 font-bold'>
							{' '}
							Popular conversions{' '}
						</p>
						<ul className=' mb-5 divide-y'>
							<li className=' p-3 my-3'> EUR to USD </li>
							<li className=' p-3 my-3'>USD to JPY</li>
							<li className=' p-3 my-3'> EUR to AUD</li>
							<li className=' p-3 my-3'>EUR to CAD</li>
							<li className=' p-3 my-3'>USD to NZD</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
