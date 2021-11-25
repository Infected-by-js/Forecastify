import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { IconTime } from '../../assets/icons/';
import { swipeRightVariants } from '../../helpers/motionUtils.js';

export const CurrentDate = ({ weekday, date, time }) => {
	return (
		<S.DateWrapp
			as={motion.div}
			initial={swipeRightVariants.hidden}
			animate={swipeRightVariants.visible}
			transition={swipeRightVariants.transition}
		>
			<S.MainTitle>Today</S.MainTitle>
			<S.Date>{weekday}</S.Date>
			<S.Date>{date}</S.Date>
			<S.Time>
				{time}
				<IconTime />
			</S.Time>
		</S.DateWrapp>
	);
};

CurrentDate.propTypes = {
	weekday: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};
