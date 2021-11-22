import { useState } from 'react';
import ForecastService from '../api/ForecastService';

export const useForecast = () => {
	const [isError, setIsError] = useState(false);
	const [isLoading, seIsLoading] = useState(false);
	const [forecast, setForecast] = useState(null);

	const getForecast = async ({ city, coords }) => {
		const { data } = await ForecastService.getForecast({ city, coords });

		setForecast(data);
	};
	return {
		isError,
		isLoading,
		forecast,
		getForecast,
	};
};
