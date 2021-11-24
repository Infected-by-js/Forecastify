import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Forecast } from './components/Forecast/';
import { Error } from './components/Error';

import { useTheme } from './hooks/useTheme';
import { useForecast } from './hooks/useForecast';

import { Loader } from './components/Loader';
import { useEffect } from 'react/cjs/react.development';
import { requestUserGeolocation } from './helpers/requestUserGeolocation';

export const App = () => {
	const { currentTheme, setIsNight } = useTheme();
	const { error, setError, isLoading, forecast, loadForecast } = useForecast(setIsNight);

	useEffect(() => {
		requestUserGeolocation(loadForecast, setError);
	}, []);

	return (
		<ThemeProvider theme={{ currentTheme }}>
			{error && <Error error={error} setError={setError} />}
			{isLoading && <Loader />}
			{forecast && <Forecast forecast={forecast} loadForecast={loadForecast} setError={setError} />}
		</ThemeProvider>
	);
};
