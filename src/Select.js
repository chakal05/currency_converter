import React from 'react';
import Select from 'react-select';
import countries from './countries';
import FallBackImg from './whiteBackground.jpg';
const colourStyles = {
	control: (provided, state) => ({
		...provided,
		color: 'black',
		backgroundColor: 'white',
		//	fontSize: '1rem',
		width: '100%',
		borderRadius: '0.25rem',
		height: '3rem',
		//borderStyle: 'none',
		padding: '0',
		cursor: 'text',
	}),
	option: (provided, state) => ({
		...provided,
		fontWeight: '400',
		color: 'black',
		backgroundColor: 'white',
		//	fontSize: '1rem',
		padding: '0.25rem 0.5rem 0.25rem 0.5rem',
		cursor: 'pointer',
		'&:hover': { backgroundColor: '#F5F5F5' },
	}),
	menu: (provided, state) => ({
		...provided,
		fontWeight: '400',
		color: 'blue',
		backgroundColor: 'white',
		//	fontSize: '1rem',
		//	padding: '0.25rem 0.5rem 0.25rem 0.5rem',
		borderRadius: '0px',
		borderStyle: 'none',
	}),
	singlecurrencycode: (provided, state) => ({
		...provided,
		color: 'black',
		fontSize: '1rem',
	}),
	input: (provided, state) => {
		return {
			...provided,
			color: 'black',
		};
	},
	placeholder: (provided, state) => {
		return {
			...provided,
			color: 'black',
		};
	},
	dropdownIndicator: (provided, state) => {
		return {
			...provided,
			color: 'black',
			//'&:hover': { color: '#F5F5F5' },
		};
	},
};

const TheSelect = (props) => {
	return (
		<>
			<label className=' text-lg font-bold'> {props.title} </label>
			<Select
				placeholder='Select currency'
				defaultValue={props.defaultVal}
				value={props.val}
				options={countries}
				styles={colourStyles}
				isSearchable
				onChange={(e) => props.set(e)}
				getOptionLabel={(e) => (
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<img
							style={{ height: 20, weight: 26 }}
							src={`https://flagcdn.com
								/
								16x12
								/
								${e['countryCode'].toLowerCase()}.
								png`}
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = FallBackImg;
							}}
							alt='country'
						/>
						<span
							style={{
								margin: '0 0.5rem',
								fontWeight: 'bold',
								fontSize: '1.3rem',
							}}
						>
							{' '}
							{e.currencycode}{' '}
						</span>
						<span style={{ fontSize: '1rem', paddingTop: '.1rem' }}>
							{e.currencyName}
						</span>
					</div>
				)}
				getOptionValue={(e) => e.currencyName}
			/>
		</>
	);
};

export default TheSelect;
