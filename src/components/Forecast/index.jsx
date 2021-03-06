import React from 'react';
import * as S from './styles';
import { PropTypes } from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import { CurrentDate } from '../CurrentDate';
import { CurrentWeather } from '../CurrentWeather';
import { SearchForm } from '../SearchForm';
import { Summary } from '../Summary';
import { UpcomingForecast } from '../UpcomingForecast';

import { formatForecastList } from '../../helpers/formatForecastList';
import { fadeInVariants } from '../../helpers/motionUtils';

export const Forecast = React.memo(({ loadForecast, forecast, setError }) => {
	const forecastList = forecast.forecast.forecastday[0].hour;
	const cityName = `${forecast.location.name}, ${forecast.location.country}`;
	const { sunrise, sunset } = forecast.forecast.forecastday[0].astro;

	const currentHours = forecast.currentDate.hours24;
	const currentTemp = Math.round(forecast.current.temp_c);

	const formattedForecastList = formatForecastList(forecastList, currentHours);

	return (
		<AnimatePresence>
			<S.Overlay
				as={motion.div}
				initial={fadeInVariants.hidden}
				animate={fadeInVariants.visible}
				transition={fadeInVariants.transition}
			>
				<S.Container>
					<SearchForm loadForecast={loadForecast} cityName={cityName} />

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
						<UpcomingForecast forecastList={formattedForecastList} />
					</S.Footer>
				</S.Container>
			</S.Overlay>
		</AnimatePresence>
	);
});

Forecast.propTypes = {
	loadForecast: PropTypes.func.isRequired,
	setError: PropTypes.func.isRequired,
	forecast: PropTypes.shape({
		forecast: PropTypes.object.isRequired,
		current: PropTypes.object.isRequired,
		currentDate: PropTypes.object.isRequired,
	}),
};
