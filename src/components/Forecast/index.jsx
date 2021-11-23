import React from 'react';
import * as S from './styles';
import { PropTypes } from 'prop-types';

import { CurrentDate } from '../CurrentDate';
import { CurrentWeather } from '../CurrentWeather';
import { SearchForm } from '../SearchForm';
import { Summary } from '../Summary';
import { UpcomingForecast } from '../UpcomingForecast';

import { FORECAST_LIMIT } from '../../helpers/constants';
import { convertDateStrToObj } from '../../helpers/convertDateStrToObj';

export const Forecast = ({ getForecast, forecast }) => {
	const cityName = `${forecast.location.name}, ${forecast.location.country}`;
	const { sunrise, sunset } = forecast.forecast.forecastday[0].astro;
	const forecastList = forecast.forecast.forecastday[0].hour;
	const currentTemp = Math.round(forecast.current.temp_c);

	const preparedForecastList = forecastList.reduce((acc, item) => {
		const currentHours = +forecast.currentDate.hours24;
		const hours = new Date(item.time).getHours();

		if (acc.length < FORECAST_LIMIT) {
			if (hours >= currentHours) {
				const { hours12, modifier } = convertDateStrToObj(item.time);
				const currentTime = hours === currentHours ? 'Now' : `${hours12} ${modifier}`;
				const temp = Math.round(item.temp_c);

				const newItem = { ...item, time: `${currentTime}`, temp_c: temp };

				return [...acc, newItem];
			}
			return acc;
		}
		return acc;
	}, []);

	return (
		<S.Overlay>
			<S.Container>
				<SearchForm getForecast={getForecast} cityName={cityName} />

				<S.Main>
					<S.MainBanner>
						<CurrentWeather
							temp={currentTemp}
							weatherDescription={forecast.current.condition.text}
							weatherIconSrc={forecast.current.condition.icon}
						/>
						<CurrentDate
							weekday={forecast.currentDate.weekday}
							date={forecast.currentDate.date}
							time={forecast.currentDate.time12h}
						/>
					</S.MainBanner>
					<Summary
						humidity={forecast.current.humidity}
						wind={forecast.current.wind_mph}
						sunrise={sunrise}
						sunset={sunset}
					/>
				</S.Main>

				<S.Footer>
					<UpcomingForecast forecastList={preparedForecastList} />
				</S.Footer>
			</S.Container>
		</S.Overlay>
	);
};

Forecast.propTypes = {
	getForecast: PropTypes.func.isRequired,
	forecast: PropTypes.shape({
		forecast: PropTypes.object.isRequired,
		current: PropTypes.object.isRequired,
		currentDate: PropTypes.object.isRequired,
	}),
};
