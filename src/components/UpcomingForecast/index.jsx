import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

import { UpcomingForecastItem } from '../UpcomingForecastItem/';
import { motion } from 'framer-motion';
import { fadeInVariants } from '../../helpers/motionUtils.js';

export const UpcomingForecast = ({ forecastList }) => {
	return (
		<S.UpcomingForecast
			as={motion.ul}
			initial={fadeInVariants.hidden}
			animate={fadeInVariants.visible}
			transition={fadeInVariants.transition}
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
