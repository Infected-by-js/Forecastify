import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { Forecast } from './components/Forecast/';
import { useForecast } from './hooks/useForecast';

export const App = () => {
	const { isError, isLoading, forecast } = useForecast();
	const { currentTheme, setIsNight } = useTheme();

	console.log('RENDER APP');

	return (
		<ThemeProvider theme={{ currentTheme, setIsNight }}>
			<>
				{/* isLoading && <Loading/> */}
				{/* isError && <Error/> */}
				{forecast && (
					<Overlay>
						<h1>
							<Forecast />
						</h1>
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
