import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const Error = ({ error, setError }) => {
	const onCloseError = () => setError(false);
	return (
		<S.ErrorWrapp>
			<S.OutClickOverlay onClick={onCloseError} />
			<S.ErrorMessage>
				{error} <S.Close onClick={onCloseError} />
			</S.ErrorMessage>
		</S.ErrorWrapp>
	);
};

Error.propTypes = {};
