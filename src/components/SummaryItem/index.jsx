import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const SummaryItem = ({ icon: Icon, value, unit }) => {
	return (
		<S.ItemWrapp>
			<S.IconWrapp>
				<Icon />
			</S.IconWrapp>
			<S.Value>
				{value} {unit}
			</S.Value>
		</S.ItemWrapp>
	);
};

SummaryItem.propTypes = {
	icon: PropTypes.elementType,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	unit: PropTypes.string,
};

SummaryItem.defaultProps = {
	icon: <span>icon</span>,
	value: '',
	unit: '',
};
