import React from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeInVariants } from '../../helpers/motionUtils.js';

export const Error = ({ error, setError }) => {
	const onCloseError = () => setError(false);

	return (
		<S.ErrorWrapp>
			<S.OutClickOverlay
				as={motion.div}
				layout
				initial={fadeInVariants.hidden}
				animate={fadeInVariants.visible}
				transition={fadeInVariants.transition}
				onClick={onCloseError}
			/>
			<S.ErrorMessage
				as={motion.div}
				initial={{ ...fadeInVariants.hidden, x: '-200%', y: '-50%' }}
				animate={{ ...fadeInVariants.visible, x: '-50%', y: '-50%' }}
			>
				{error} <S.Close autoFocus onClick={onCloseError} />
			</S.ErrorMessage>
		</S.ErrorWrapp>
	);
};

Error.propTypes = {
	error: PropTypes.string.isRequired,
	setError: PropTypes.func.isRequired,
};
