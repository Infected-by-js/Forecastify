import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { IconHumidity, IconWind, IconSunrise, IconSunset } from '../../assets/icons';
import { SummaryItem } from '../SummaryItem';
import { motion } from 'framer-motion';
import { swipeLeftVariants, swipeRightVariants } from '../../helpers/motionUtils.js';

export const Summary = ({ humidity, wind, sunrise, sunset }) => {
	return (
		<S.Wrapp>
			<S.Col
				as={motion.div}
				initial={swipeLeftVariants.hidden}
				animate={swipeLeftVariants.visible}
				transition={swipeLeftVariants.transition}
			>
				<SummaryItem icon={IconHumidity} value={humidity} unit={'%'} />
				<SummaryItem icon={IconWind} value={wind} unit={'m/sec'} />
			</S.Col>
			<S.Col
				as={motion.div}
				initial={swipeRightVariants.hidden}
				animate={swipeRightVariants.visible}
				transition={swipeLeftVariants.transition}
			>
				<SummaryItem icon={IconSunrise} value={sunrise} />
				<SummaryItem icon={IconSunset} value={sunset} />
			</S.Col>
		</S.Wrapp>
	);
};

Summary.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.number.isRequired,
	sunrise: PropTypes.string.isRequired,
	sunset: PropTypes.string.isRequired,
};
