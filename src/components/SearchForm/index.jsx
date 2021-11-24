import React, { useState } from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

import { IconRefresh } from '../../assets/icons/IconRefresh';

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

	const onRefreshHandler = () => {
		if (queryName === cityName) return;

		loadForecast({ city: queryName });
	};

	return (
		<S.SearchForm>
			<S.Label>
				<S.Input
					value={queryName}
					onChange={({ target }) => setQueryName(target.value)}
					onKeyDown={onSubmitSearch}
					onBlur={onBlurHandler}
				/>
			</S.Label>

			<S.RefreshButton onClick={onRefreshHandler}>
				<IconRefresh />
			</S.RefreshButton>
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
