import { useState } from 'react';
import ForecastService from '../api/ForecastService';
import { DateIntl } from '../helpers/DateIntl';

export const useForecast = () => {
	const [isError, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [forecast, setForecast] = useState(null);

	const getForecast = async ({ city, coords }) => {
		const { data } = await ForecastService.getForecast({ city, coords });
		console.log(DateIntl(data.location.tz_id).format(new Date(1637598544 * 1000)));
		setForecast(data);
	};
	return {
		isError,
		setError,
		isLoading,
		forecast,
		getForecast,
	};
};
