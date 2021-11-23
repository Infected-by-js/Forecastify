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

	console.log('RENDER APP');

	return (
		<ThemeProvider theme={{ currentTheme, setIsNight }}>
			<>
				{/* {isLoading && <h1>Loading...</h1>} */}
				{/* isError && <Error/> */}
				{forecast && (
					<Overlay>
						<Forecast forecast={forecast} getForecast={getForecast} />
					</Overlay>
				)}
			</>
		</ThemeProvider>
	);
};

const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	overflow: hidden;

	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	background-image: url('${({ theme }) => theme.currentTheme.backgroundImageBig}');
	background-size: 80% 80%;
	background-repeat: no-repeat;

	background-position: 200% -100%;
`;
