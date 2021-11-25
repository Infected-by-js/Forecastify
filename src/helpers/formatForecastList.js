import { FORECAST_LIMIT } from './constants';
import { convertDateStrToObj } from './convertDateStrToObj';

export const formatForecastList = (forecast, currentHours) => {
	return forecast.reduce((acc, item) => {
		const hours = new Date(item.time.replace(/-/g, '/')).getHours();

		if (acc.length < FORECAST_LIMIT) {
			if (hours >= currentHours) {
				const { hours12, modifier } = convertDateStrToObj(item.time);
				const currentTime =
					Number(hours) === Number(currentHours) ? 'Now' : `${hours12} ${modifier}`;
				const temp = Math.round(item.temp_c);

				const newItem = { ...item, time: `${currentTime}`, temp_c: temp };

				return [...acc, newItem];
			}
			return acc;
		}
		return acc;
	}, []);
};
