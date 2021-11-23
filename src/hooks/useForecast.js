import { useState, useMemo } from 'react';

import ForecastService from '../api/ForecastService';
import { convertDateStrToObj } from '../helpers/convertDateStrToObj';

export const useForecast = (changeTheme) => {
	const [isError, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [forecast, setForecast] = useState(null);

	const getForecast = async ({ city, coords }) => {
		try {
			const { data } = await ForecastService.getForecast({ city, coords });
			const formattedDate = convertDateStrToObj(data.location.localtime);

			changeTheme(!data.current.is_day);
			setForecast((prevState) => ({ ...prevState, ...data, currentDate: formattedDate }));
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
