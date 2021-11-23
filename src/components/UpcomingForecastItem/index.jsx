import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const UpcomingForecastItem = ({ time, temp, weatherIconSrc, weatherDescription }) => {
	return (
		<S.UpcomingForecastItem>
			<S.Title>{time}</S.Title>
			<S.Icon src={weatherIconSrc} alt={weatherDescription} />
			<S.Temp>{temp}˚</S.Temp>
		</S.UpcomingForecastItem>
	);
};

UpcomingForecastItem.propTypes = {
	time: PropTypes.string.isRequired,
	temp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	weatherIconSrc: PropTypes.string.isRequired,
	weatherDescription: PropTypes.string.isRequired,
};
