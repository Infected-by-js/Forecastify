import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

export const Error = ({ error, setError }) => {
	const onCloseError = () => setError(false);

	return (
		<S.ErrorWrapp>
			<S.OutClickOverlay
				as={motion.div}
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				onClick={onCloseError}
			/>
			<S.ErrorMessage
				as={motion.div}
				initial={{ opacity: '0', x: '-200%', y: '-50%' }}
				animate={{ opacity: 1, x: '-50%', y: '-50%' }}
			>
				{error} <S.Close onClick={onCloseError} />
			</S.ErrorMessage>
		</S.ErrorWrapp>
	);
};

Error.propTypes = {
	error: PropTypes.string.isRequired,
	setError: PropTypes.func.isRequired,
};
