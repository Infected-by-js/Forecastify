import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const CurrentWeather = ({ temp, weatherText, weatherIcon }) => {
	return (
		<div>
			<S.MainTempWrapp>
				<S.Temp>{temp}</S.Temp>
				<S.Unit>˚C</S.Unit>
			</S.MainTempWrapp>
			<S.MainWeatherWrapp>
				<S.Weather>{weatherText}</S.Weather>
				<img src={weatherIcon} alt={weatherText} />
			</S.MainWeatherWrapp>
		</div>
	);
};

CurrentWeather.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherText: PropTypes.string.isRequired,
	weatherIcon: PropTypes.string.isRequired,
};
