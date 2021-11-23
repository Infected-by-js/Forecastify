import { useContext, useState } from 'react';
import ForecastService from '../api/ForecastService';
import { formatDateToLocale } from '../helpers/convertDateToHours12';

export const useForecast = (changeTheme) => {
	const [isError, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [forecast, setForecast] = useState(null);

	console.log('USE FORECAST');

	const getForecast = async ({ city, coords }) => {
		try {
			const { data } = await ForecastService.getForecast({ city, coords });
			const formattedDate = formatDateToLocale(data.location.localtime);

			changeTheme(!data.current.is_day);
			setForecast({ ...forecast, ...data, currentDate: formattedDate });
		} catch (e) {
			// errorsType[e.code]
			console.error('ERROR: ', e.message);
		}
	};
	return {
		isError,
		setError,
		isLoading,
		forecast,
		getForecast,
	};
};
