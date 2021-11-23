import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Forecast } from './components/Forecast/';
import { Error } from './components/Error';

import { useTheme } from './hooks/useTheme';
import { useForecast } from './hooks/useForecast';
import { useInitial } from './hooks/useInitial';
import { Loader } from './components/Loader';

export const App = () => {
	const { currentTheme, setIsNight } = useTheme();
	const { error, setError, isLoading, forecast, getForecast } = useForecast(setIsNight);

	useInitial(getForecast, setError);

	console.log('REDRED APP');
	console.log(forecast);
	return (
		<ThemeProvider theme={{ currentTheme }}>
			{error && <Error error={error} setError={setError} />}
			{isLoading && <Loader />}
			{forecast && <Forecast forecast={forecast} getForecast={getForecast} setError={setError} />}
		</ThemeProvider>
	);
};
