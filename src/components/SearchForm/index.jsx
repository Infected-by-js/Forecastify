import React, { useState } from 'react';
import * as S from './styles.js';
import PropTypes from 'prop-types';

import { IconRefresh } from '../../assets/icons/IconRefresh';

export const SearchForm = ({ getForecast, cityName, setError }) => {
	const [queryName, setQueryName] = useState(cityName);

	const onSubmitSearch = ({ key }) => {
		if (key === 'Enter') {
			if (!queryName) {
				setError('The search field must not be empty');
				return;
			}
			getForecast({ city: queryName });
		}
	};

	const onBlurHandler = () => {
		setQueryName(cityName);
	};

	const onRefreshHandler = () => {
		getForecast({ city: queryName });
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
	getForecast: PropTypes.func.isRequired,
	setError: PropTypes.func.isRequired,
	cityName: PropTypes.string,
};
SearchForm.defaultProps = {
	cityName: '',
};
