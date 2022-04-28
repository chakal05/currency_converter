
const countries = [
	{
		currencycode: 'AED',
		countryCode: 'AE',
		currencyName: 'United Arab Emirates dirham',
	},
	{
		currencycode: 'AFN',
		countryCode: 'AF',
		currencyName: 'Afghan afghani',
	},

	{
		currencycode: 'ALL',
		countryCode: 'AL',
		currencyName: '	Albanian lek',
	},
	{
		currencycode: 'AMD',
		countryCode: 'AM',
		currencyName: 'Armenian dram',
	},
	{
		currencycode: 'AOA',
		countryCode: 'AO',
		currencyName: 'Angolan kwanza',
	},

	{
		currencycode: 'ARS',
		countryCode: 'AR',
		currencyName: 'Argentine peso',
	},
	{
		currencycode: 'AUD',
		countryCode: 'AU',
		currencyName: 'Australian dollar',
	},

	{
		currencycode: 'AZN',
		countryCode: 'AZ',
		currencyName: 'Azerbaijani manat',
	},
	{
		currencycode: 'BAM',
		countryCode: 'BA',
		currencyName: 'Bosnia and Herzegovina convertible mark',
	},
	{
		currencycode: 'BBD',
		countryCode: 'BB',
		currencyName: 'Barbadian dollar',
	},
	{
		currencycode: 'BDT',
		countryCode: 'BD',
		currencyName: 'Bangladeshi taka',
	},
	{
		currencycode: 'XOF',
		countryCode: 'XOF',
		currencyName: 'West African CFA franc',
	},

	{
		currencycode: 'BGN',
		countryCode: 'BG',
		currencyName: 'Bulgarian lev',
	},
	{
		currencycode: 'BHD',
		countryCode: 'BH',
		currencyName: 'Bahraini dinar',
	},
	{
		currencycode: 'BIF',
		countryCode: 'BI',
		currencyName: 'Burundian franc',
	},

	{
		currencycode: 'BND',
		countryCode: 'BN',
		currencyName: 'Brunei dollar',
	},
	{
		currencycode: 'BOB',
		countryCode: 'BO',
		currencyName: 'Bolivian boliviano',
	},

	{
		currencycode: 'BRL',
		countryCode: 'BR',
		currencyName: 'Brazilian real',
	},
	{
		currencycode: 'BSD',
		countryCode: 'BS',
		currencyName: '	Bahamian dollar',
	},
	{
		currencycode: 'BTN',
		countryCode: 'BT',
		currencyName: 'Bhutanese ngultrum',
	},

	{
		currencycode: 'BWP',
		countryCode: 'BW',
		currencyName: 'Botswana pula',
	},
	{
		currencycode: 'BYR',
		countryCode: 'BY',
		currencyName: 'Belarusian ruble',
	},
	{
		currencycode: 'BZD',
		countryCode: 'BZ',
		currencyName: '	Belize dollar',
	},
	{
		currencycode: 'CAD',
		countryCode: 'CA',
		currencyName: 'Canadian dollar',
	},

	{
		currencycode: 'CDF',
		countryCode: 'CD',
		currencyName: '	Congolese franc',
	},

	{
		currencycode: 'CHF',
		countryCode: 'CH',
		currencyName: 'Swiss franc',
	},

	{
		currencycode: 'CLP',
		countryCode: 'CL',
		currencyName: '	Chilean peso',
	},

	{
		currencycode: 'XAF',
		countryCode: 'XAF',
		currencyName: 'Central African CFA franc',
	},
	{
		currencycode: 'CNY',
		countryCode: 'CN',
		currencyName: 'Chinese yuan',
	},
	{
		currencycode: 'COP',
		countryCode: 'CO',
		currencyName: 'Colombian peso',
	},
	{
		currencycode: 'CRC',
		countryCode: 'CR',
		currencyName: '	Costa Rican colón',
	},
	{
		currencycode: 'CUP',
		countryCode: 'CU',
		currencyName: 'Cuban peso',
	},
	{
		currencycode: 'CVE',
		countryCode: 'CV',
		currencyName: 'Cape Verdean escudo',
	},

	{
		currencycode: 'CZK',
		countryCode: 'CZ',
		currencyName: '	Czech koruna',
	},

	{
		currencycode: 'DJF',
		countryCode: 'DJ',
		currencyName: 'Djiboutian franc',
	},
	{
		currencycode: 'DKK',
		countryCode: 'DK',
		currencyName: '	Danish krone',
	},

	{
		currencycode: 'DOP',
		countryCode: 'DO',
		currencyName: 'Dominican peso',
	},
	{
		currencycode: 'DZD',
		countryCode: 'DZ',
		currencyName: 'Algerian dinar',
	},
	{
		currencycode: 'USD',
		countryCode: 'EC',
		currencyName: '	United States dollar',
	},

	{
		currencycode: 'EGP',
		countryCode: 'EG',
		currencyName: '	Egyptian pound',
	},

	{
		currencycode: 'ERN',
		countryCode: 'ER',
		currencyName: 'Eritrean nakfa',
	},

	{
		currencycode: 'ETB',
		countryCode: 'ET',
		currencyName: 'Ethiopian birr',
	},

	{
		currencycode: 'FJD',
		countryCode: 'FJ',
		currencyName: 'Fijian dollar',
	},

	{
		currencycode: 'GBP',
		countryCode: 'GB',
		currencyName: 'British pound',
	},
	{
		currencycode: 'XCD',
		countryCode: 'GD',
		currencyName: '	East Caribbean dollar',
	},
	{
		currencycode: 'GEL',
		countryCode: 'GE',
		currencyName: '	Georgian lari',
	},

	{
		currencycode: 'GHS',
		countryCode: 'GH',
		currencyName: '	Ghanaian cedi',
	},

	{
		currencycode: 'GMD',
		countryCode: 'GM',
		currencyName: 'Gambian dalasi',
	},
	{
		currencycode: 'GNF',
		countryCode: 'GN',
		currencyName: 'Guinean franc',
	},

	{
		currencycode: 'GTQ',
		countryCode: 'GT',
		currencyName: 'Guatemalan quetzal',
	},

	{
		currencycode: 'GYD',
		countryCode: 'GY',
		currencyName: 'Guyanese dollar',
	},

	{
		currencycode: 'HNL',
		countryCode: 'HN',
		currencyName: 'Honduran lempira',
	},
	{
		currencycode: 'HRK',
		countryCode: 'HR',
		currencyName: '	Croatian kuna',
	},
	{
		currencycode: 'HTG',
		countryCode: 'HT',
		currencyName: '	Haitian gourde',
	},
	{
		currencycode: 'HUF',
		countryCode: 'HU',
		currencyName: 'Hungarian forint',
	},
	{
		currencycode: 'IDR',
		countryCode: 'ID',
		currencyName: '	Indonesian rupiah',
	},

	{
		currencycode: 'ILS',
		countryCode: 'IL',
		currencyName: 'Israeli new shekel',
	},

	{
		currencycode: 'INR',
		countryCode: 'IN',
		currencyName: 'Indian rupee',
	},

	{
		currencycode: 'IQD',
		countryCode: 'IQ',
		currencyName: '	Iraqi dinar',
	},
	{
		currencycode: 'IRR',
		countryCode: 'IR',
		currencyName: '	Iranian rial',
	},
	{
		currencycode: 'ISK',
		countryCode: 'IS',
		currencyName: 'Icelandic króna',
	},

	{
		currencycode: 'JMD',
		countryCode: 'JM',
		currencyName: 'Jamaican dollar',
	},
	{
		currencycode: 'JOD',
		countryCode: 'JO',
		currencyName: 'Jordanian dinar',
	},
	{
		currencycode: 'JPY',
		countryCode: 'JP',
		currencyName: 'Japanese yen',
	},
	{
		currencycode: 'KES',
		countryCode: 'KE',
		currencyName: '	Kenyan shilling',
	},
	{
		currencycode: 'KGS',
		countryCode: 'KG',
		currencyName: '	Kyrgyzstani som',
	},
	{
		currencycode: 'KHR',
		countryCode: 'KH',
		currencyName: '	Cambodian riel',
	},

	{
		currencycode: 'KMF',
		countryCode: 'KM',
		currencyName: 'Comorian franc',
	},

	{
		currencycode: 'KRW',
		countryCode: 'KR',
		currencyName: 'South Korean won',
	},
	{
		currencycode: 'KWD',
		countryCode: 'KW',
		currencyName: 'Kuwaiti dinar',
	},

	{
		currencycode: 'KZT',
		countryCode: 'KZ',
		currencyName: 'Kazakhstani tenge',
	},
	{
		currencycode: 'LAK',
		countryCode: 'LA',
		currencyName: 'Lao kip',
	},
	{
		currencycode: 'LBP',
		countryCode: 'LB',
		currencyName: 'Lebanese pound',
	},

	{
		currencycode: 'CHF',
		countryCode: 'LI',
		currencyName: 'Swiss Franc',
	},
	{
		currencycode: 'LKR',
		countryCode: 'LK',
		currencyName: 'Sri Lankan rupee',
	},
	{
		currencycode: 'LRD',
		countryCode: 'LR',
		currencyName: 'Liberian dollar',
	},
	{
		currencycode: 'LSL',
		countryCode: 'LS',
		currencyName: '	Lesotho loti',
	},

	{
		currencycode: 'LYD',
		countryCode: 'LY',
		currencyName: '	Libyan dinar',
	},
	{
		currencycode: 'MAD',
		countryCode: 'MA',
		currencyName: '	Moroccan dirham',
	},

	{
		currencycode: 'MDL',
		countryCode: 'MD',
		currencyName: '	Moldovan leu',
	},

	{
		currencycode: 'MGA',
		countryCode: 'MG',
		currencyName: 'Malagasy ariary',
	},

	{
		currencycode: 'MKD',
		countryCode: 'MK',
		currencyName: 'Macedonian denar',
	},
	{
		currencycode: 'XOF',
		countryCode: 'ML',
		currencyName: '	West African CFA franc',
	},
	{
		currencycode: 'MMK',
		countryCode: 'MM',
		currencyName: 'Burmese kyat',
	},
	{
		currencycode: 'MNT',
		countryCode: 'MN',
		currencyName: 'Mongolian Tugriks',
	},
	{
		currencycode: 'MOP',
		countryCode: 'MO',
		currencyName: '	Mongolian tögrög',
	},

	{
		currencycode: 'MRO',
		countryCode: 'MR',
		currencyName: '	Mauritanian ouguiya',
	},
	{
		currencycode: 'XCD',
		countryCode: 'XCD',
		currencyName: 'East Caribbean dollar',
	},

	{
		currencycode: 'MUR',
		countryCode: 'MU',
		currencyName: '	Mauritian rupee',
	},
	{
		currencycode: 'MVR',
		countryCode: 'MV',
		currencyName: 'Maldivian rufiyaa',
	},
	{
		currencycode: 'MWK',
		countryCode: 'MW',
		currencyName: 'Malawian kwacha',
	},
	{
		currencycode: 'MXN',
		countryCode: 'MX',
		currencyName: 'Mexican peso',
	},
	{
		currencycode: 'MYR',
		countryCode: 'MY',
		currencyName: '	Malaysian ringgit',
	},
	{
		currencycode: 'MZN',
		countryCode: 'MZ',
		currencyName: 'Mozambican metical',
	},
	{
		currencycode: 'NAD',
		countryCode: 'NA',
		currencyName: 'Namibian dollar',
	},

	{
		currencycode: 'NGN',
		countryCode: 'NG',
		currencyName: 'Nigerian naira',
	},
	{
		currencycode: 'NIO',
		countryCode: 'NI',
		currencyName: 'Nicaraguan córdoba',
	},

	{
		currencycode: 'NOK',
		countryCode: 'NO',
		currencyName: '	Norwegian krone',
	},
	{
		currencycode: 'NPR',
		countryCode: 'NP',
		currencyName: 'Nepalese rupee',
	},

	{
		currencycode: 'NZD',
		countryCode: 'NU',
		currencyName: '	New Zealand dollar',
	},
	{
		currencycode: 'NZD',
		countryCode: 'NZ',
		currencyName: '	New Zealand dollar',
	},
	{
		currencycode: 'OMR',
		countryCode: 'OM',
		currencyName: 'Omani rial',
	},
	{
		currencycode: 'PAB',
		countryCode: 'PA',
		currencyName: '	Panamanian balboa',
	},
	{
		currencycode: 'PEN',
		countryCode: 'PE',
		currencyName: '	Peruvian sol',
	},
	{
		currencycode: 'PGK',
		countryCode: 'PG',
		currencyName: '	Papua New Guinean kina',
	},
	{
		currencycode: 'PHP',
		countryCode: 'PH',
		currencyName: 'Philippine peso',
	},
	{
		currencycode: 'PKR',
		countryCode: 'PK',
		currencyName: '	Pakistani rupee',
	},
	{
		currencycode: 'PLN',
		countryCode: 'PL',
		currencyName: '	Polish zloty',
	},

	{
		currencycode: 'NZD',
		countryCode: 'PN',
		currencyName: '	New Zealand dollar',
	},
	{
		currencycode: 'USD',
		countryCode: 'US',
		currencyName: 'United States dollar',
	},

	{
		currencycode: 'PYG',
		countryCode: 'PY',
		currencyName: 'Paraguayan guaraní',
	},
	{
		currencycode: 'QAR',
		countryCode: 'QA',
		currencyName: 'Qatari riyal',
	},

	{
		currencycode: 'RON',
		countryCode: 'RO',
		currencyName: 'Romanian leu',
	},
	{
		currencycode: 'RSD',
		countryCode: 'RS',
		currencyName: '	Serbian dinar',
	},
	{
		currencycode: 'RUB',
		countryCode: 'RU',
		currencyName: 'Russian ruble',
	},
	{
		currencycode: 'RWF',
		countryCode: 'RW',
		currencyName: 'Rwandan franc',
	},
	{
		currencycode: 'SAR',
		countryCode: 'SA',
		currencyName: '	Saudi riyal',
	},
	{
		currencycode: 'SBD',
		countryCode: 'SB',
		currencyName: '	Solomon Islands dollar',
	},
	{
		currencycode: 'SCR',
		countryCode: 'SC',
		currencyName: 'Seychellois rupee',
	},
	{
		currencycode: 'SDG',
		countryCode: 'SD',
		currencyName: 'Sudanese pound',
	},
	{
		currencycode: 'SEK',
		countryCode: 'SE',
		currencyName: '	Swedish krona',
	},
	{
		currencycode: 'SGD',
		countryCode: 'SG',
		currencyName: '	Singapore dollar',
	},

	{
		currencycode: 'SLL',
		countryCode: 'SL',
		currencyName: 'Sierra Leonean leone',
	},
	{
		currencycode: 'EUR',
		countryCode: 'EU',
		currencyName: 'Euro',
	},

	{
		currencycode: 'SOS',
		countryCode: 'SO',
		currencyName: '	Somali shilling',
	},
	{
		currencycode: 'SRD',
		countryCode: 'SR',
		currencyName: '	Surinamese dollar',
	},
	{
		currencycode: 'SSP',
		countryCode: 'SS',
		currencyName: '	South Sudanese pound',
	},
	{
		currencycode: 'STD',
		countryCode: 'ST',
		currencyName: 'São Tomé and Príncipe dobra',
	},
	{
		currencycode: 'USD',
		countryCode: 'SV',
		currencyName: 'Unites States Dollar',
	},

	{
		currencycode: 'SYP',
		countryCode: 'SY',
		currencyName: 'Syrian pound',
	},
	{
		currencycode: 'SZL',
		countryCode: 'SZ',
		currencyName: '	Swazi lilangeni',
	},

	{
		currencycode: 'THB',
		countryCode: 'TH',
		currencyName: 'Thai baht',
	},
	{
		currencycode: 'TJS',
		countryCode: 'TJ',
		currencyName: 'Tajikistani somoni',
	},
	{
		currencycode: 'NZD',
		countryCode: 'TK',
		currencyName: 'New Zealand dollar',
	},

	{
		currencycode: 'TMT',
		countryCode: 'TM',
		currencyName: 'Turkmenistan manat',
	},
	{
		currencycode: 'TND',
		countryCode: 'TN',
		currencyName: '	Tunisian dinar',
	},
	{
		currencycode: 'TOP',
		countryCode: 'TO',
		currencyName: `Tongan pa'anga`,
	},
	{
		currencycode: 'TRY',
		countryCode: 'TR',
		currencyName: 'Turkish lira',
	},
	{
		currencycode: 'TTD',
		countryCode: 'TT',
		currencyName: 'Trinidad and Tobago dollar',
	},

	{
		currencycode: 'TWD',
		countryCode: 'TW',
		currencyName: 'New Taiwan dollar',
	},
	{
		currencycode: 'TZS',
		countryCode: 'TZ',
		currencyName: 'Tanzanian shilling',
	},
	{
		currencycode: 'UAH',
		countryCode: 'UA',
		currencyName: '	Ukrainian hryvnia',
	},
	{
		currencycode: 'UGX',
		countryCode: 'UG',
		currencyName: 'Ugandan shilling',
	},

	{
		currencycode: 'UYU',
		countryCode: 'UY',
		currencyName: 'Uruguayan peso',
	},
	{
		currencycode: 'UZS',
		countryCode: 'UZ',
		currencyName: 'Uzbekistani som',
	},

	{
		currencycode: 'VEF',
		countryCode: 'VE',
		currencyName: 'Venezuelan bolívar',
	},

	{
		currencycode: 'VND',
		countryCode: 'VN',
		currencyName: 'Vietnamese dong',
	},
	{
		currencycode: 'VUV',
		countryCode: 'VU',
		currencyName: '	Vanuatu vatu',
	},

	{
		currencycode: 'WST',
		countryCode: 'WS',
		currencyName: '	Samoan tala',
	},

	{
		currencycode: 'YER',
		countryCode: 'YE',
		currencyName: 'Yemeni rial',
	},

	{
		currencycode: 'ZAR',
		countryCode: 'ZA',
		currencyName: 'South African rand',
	},
	{
		currencycode: 'ZMW',
		countryCode: 'ZM',
		currencyName: 'Zambian kwacha',
	},
	{
		currencycode: 'ZWD',
		countryCode: 'ZW',
		currencyName: 'Zimbabwean Dollars',
	},
];

export default countries;
