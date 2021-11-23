import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { IconTime } from '../../assets/icons/IconTime';

export const CurrentDate = ({ weekday, date, time }) => {
	return (
		<div>
			<S.MainTitle>Today</S.MainTitle>
			<S.Date>{weekday}</S.Date>
			<S.Date>{date}</S.Date>
			<S.Time>
				{time}
				<IconTime />
			</S.Time>
		</div>
	);
};

CurrentDate.propTypes = {
	weekday: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
};
