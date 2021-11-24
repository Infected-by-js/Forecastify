import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const UpcomingForecastItem = ({ time, temp, weatherIconSrc, weatherDescription, id }) => {
	return (
		<S.UpcomingForecastItem
			as={motion.li}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1 + id / 10 }}
		>
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
	id: PropTypes.number,
};
