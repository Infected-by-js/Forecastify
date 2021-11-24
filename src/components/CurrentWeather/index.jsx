import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const CurrentWeather = ({ temp, weatherDescription, weatherIconSrc }) => {
	return (
		<motion.div layout>
			<S.MainTempWrapp
				as={motion.div}
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
			>
				<S.Temp>{temp}</S.Temp>
				<S.Unit>˚C</S.Unit>
			</S.MainTempWrapp>
			<S.MainWeatherWrapp
				as={motion.div}
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
			>
				<S.Weather>{weatherDescription}</S.Weather>
				<motion.img src={weatherIconSrc} alt={weatherDescription} />
			</S.MainWeatherWrapp>
		</motion.div>
	);
};

CurrentWeather.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherDescription: PropTypes.string.isRequired,
	weatherIconSrc: PropTypes.string.isRequired,
};
