import { useEffect } from 'react';

export const useInitial = (getForecast, showError) => {
	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => successLocationFound(position, getForecast),
			(error) => noLocationFound(error, getForecast)
		);

		const successLocationFound = async (position, getForecast) => {
			try {
				const { latitude, longitude } = position.coords;
				await getForecast({ coords: [latitude, longitude] });
			} catch (e) {
				showError(e.message);
			}
		};

		const noLocationFound = async (error, getForecast) => {
			try {
				await getForecast({ city: 'Moscow' });
				console.error('Permission problem', error.message);
			} catch (error) {
				showError(error.message);
			}
		};
		// eslint-disable-next-line
	}, []);
};
