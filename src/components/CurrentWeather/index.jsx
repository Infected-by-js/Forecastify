import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const CurrentWeather = ({ temp, weatherDescription, weatherIconSrc }) => {
	return (
		<div>
			<S.MainTempWrapp>
				<S.Temp>{temp}</S.Temp>
				<S.Unit>˚C</S.Unit>
			</S.MainTempWrapp>
			<S.MainWeatherWrapp>
				<S.Weather>{weatherDescription}</S.Weather>
				<img src={weatherIconSrc} alt={weatherDescription} />
			</S.MainWeatherWrapp>
		</div>
	);
};

CurrentWeather.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherDescription: PropTypes.string.isRequired,
	weatherIconSrc: PropTypes.string.isRequired,
};
