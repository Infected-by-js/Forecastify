import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { scaleInVariants } from '../../helpers/motionUtils.js';

export const CurrentWeather = ({ temp, weatherDescription, weatherIconSrc }) => {
	return (
		<motion.div layout>
			<S.MainTempWrapp
				as={motion.div}
				initial={scaleInVariants.hidden}
				animate={scaleInVariants.visible}
				transition={scaleInVariants.transition}
			>
				<S.Temp>{temp}</S.Temp>
				<S.Unit>˚C</S.Unit>
			</S.MainTempWrapp>
			<S.MainWeatherWrapp
				as={motion.div}
				initial={scaleInVariants.hidden}
				animate={scaleInVariants.visible}
				transition={scaleInVariants.transition}
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
