import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

import { UpcomingForecastItem } from '../UpcomingForecastItem/';

export const UpcomingForecast = ({ forecastList }) => {
	return (
		<S.UpcomingForecast>
			{forecastList.map(({ time, temp_c, condition: { icon, text } }) => (
				<UpcomingForecastItem
					key={time}
					time={time}
					temp={temp_c}
					weatherIconSrc={icon}
					weatherDescription={text}
				/>
			))}
		</S.UpcomingForecast>
	);
};

UpcomingForecast.propTypes = {
	forecastList: PropTypes.array.isRequired,
};
