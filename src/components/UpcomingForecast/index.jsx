import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

import { UpcomingForecastItem } from '../UpcomingForecastItem/';
import { motion } from 'framer-motion';

export const UpcomingForecast = ({ forecastList }) => {
	return (
		<S.UpcomingForecast
			as={motion.ul}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.1 }}
		>
			{forecastList.map(({ time, temp_c, condition: { icon, text } }, index) => (
				<UpcomingForecastItem
					as={motion.li}
					key={time}
					id={index}
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
