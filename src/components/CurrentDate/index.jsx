import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { IconTime } from '../../assets/icons/';

export const CurrentDate = ({ weekday, date, time }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: '100%' }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 1 }}
		>
			<S.MainTitle>Today</S.MainTitle>
			<S.Date>{weekday}</S.Date>
			<S.Date>{date}</S.Date>
			<S.Time>
				{time}
				<IconTime />
			</S.Time>
		</motion.div>
	);
};

CurrentDate.propTypes = {
	weekday: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};
