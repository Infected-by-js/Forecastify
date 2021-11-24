import { useState } from 'react';

import ForecastService from '../api/ForecastService';
import { convertDateStrToObj } from '../helpers/convertDateStrToObj';

export const useForecast = (changeTheme) => {
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [forecast, setForecast] = useState(null);

	const loadForecast = async ({ city, coords }) => {
		try {
			setIsLoading(true);
			const { data } = await ForecastService.getForecast({ city, coords });

			const formattedDate = convertDateStrToObj(data.location.localtime);

			changeTheme(!data.current.is_day);
			setForecast({ ...data, currentDate: formattedDate });
		} catch (e) {
			setError(e.response.data.error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		error,
		setError,
		isLoading,
		forecast,
		loadForecast,
	};
};
