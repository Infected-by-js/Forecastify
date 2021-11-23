import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Forecast } from './components/Forecast/';

import { useTheme } from './hooks/useTheme';
import { useForecast } from './hooks/useForecast';
import { useInitial } from './hooks/useInitial';

export const App = () => {
	const { currentTheme, setIsNight } = useTheme();
	const { isError, isLoading, forecast, getForecast } = useForecast(setIsNight);

	useInitial(getForecast);
	return (
		<ThemeProvider theme={{ currentTheme }}>
			{/* {isLoading && <h1>Loading...</h1>} */}
			{/* isError && <Error/> */}
			{forecast && <Forecast forecast={forecast} getForecast={getForecast} />}
		</ThemeProvider>
	);
};
