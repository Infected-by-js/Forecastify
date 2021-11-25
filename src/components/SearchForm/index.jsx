import React, { useState } from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { scaleInVariants, swipeTopVariants } from '../../helpers/motionUtils.js';

export const SearchForm = ({ loadForecast, cityName }) => {
	const [queryName, setQueryName] = useState(cityName);

	const onSubmitSearch = async ({ key }) => {
		if (key === 'Enter') {
			if (queryName === cityName || !queryName) return;

			loadForecast({ city: queryName });
		}
	};

	const onBlurHandler = () => {
		setQueryName(cityName);
	};

	const onClearInput = () => {
		setQueryName('');
	};

	return (
		<S.SearchForm>
			<S.Label onBlur={onBlurHandler}>
				<S.Input
					as={motion.input}
					initial={swipeTopVariants.hidden}
					animate={swipeTopVariants.visible}
					transition={swipeTopVariants.transition}
					value={queryName}
					onChange={({ target }) => setQueryName(target.value)}
					onKeyDown={onSubmitSearch}
				/>
				<S.Close
					onClick={onClearInput}
					as={motion.span}
					initial={scaleInVariants.hidden}
					animate={{ ...scaleInVariants.visible, opacity: 0.3 }}
					transition={scaleInVariants.transition}
				/>
			</S.Label>
		</S.SearchForm>
	);
};

SearchForm.propTypes = {
	loadForecast: PropTypes.func.isRequired,
	cityName: PropTypes.string,
};
SearchForm.defaultProps = {
	cityName: '',
};
