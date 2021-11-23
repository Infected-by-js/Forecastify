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

UpcomingForecastItem.propTypes = {};
