import React, { useState } from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

export const SearchForm = ({ loadForecast, cityName, setError }) => {
	const [queryName, setQueryName] = useState(cityName);

	const onSubmitSearch = ({ key }) => {
		if (queryName === cityName) return;
		if (key === 'Enter') {
			if (!queryName) {
				setError('The search field must not be empty');
				return;
			}

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
		<S.SearchForm onBlur={onBlurHandler}>
			<S.Label>
				<S.Input
					value={queryName}
					onChange={({ target }) => setQueryName(target.value)}
					onKeyDown={onSubmitSearch}
				/>
			</S.Label>
			<S.Close onClick={onClearInput} />
		</S.SearchForm>
	);
};

SearchForm.propTypes = {
	loadForecast: PropTypes.func.isRequired,
	setError: PropTypes.func.isRequired,
	cityName: PropTypes.string,
};
SearchForm.defaultProps = {
	cityName: '',
};
