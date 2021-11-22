import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { IconTime } from '../../assets/icons/IconTime';

export const CurrentDate = () => {
	return (
		<div>
			<S.MainTitle>Today</S.MainTitle>
			<S.Date>{}</S.Date>
			<S.Date>{}</S.Date>
			<S.Time>
				{}
				<IconTime />
			</S.Time>
		</div>
	);
};

CurrentDate.propTypes = {};
