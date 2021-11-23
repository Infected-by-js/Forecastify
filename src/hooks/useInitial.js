import { useEffect } from 'react';

export const useInitial = (getForecast) => {
	const successLocationFound = async (position, getForecast) => {
		console.log('INITIAL FETCHING BY LOCATION...');

		try {
			const { latitude, longitude } = position.coords;
			await getForecast({ coords: [latitude, longitude] });
		} catch (e) {
			console.error('ERROR BY GETTING LOCATION', e.message);
		}
	};

	const noLocationFound = async (error, getForecast) => {
		console.log('INITIAL FETCHING BY DEFAULT CITY...');

		try {
			await getForecast({ city: 'Moscow' });

			if (error) {
				// render message about default city because permission was denied;
				console.error('Permission problem:', error.message);
			}
		} catch (error) {
			console.error('Failed fetch by location', error.message);
		}
	};

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			(position) => successLocationFound(position, getForecast),
			(error) => noLocationFound(error, getForecast)
		);

		// eslint-disable-next-line
	}, []);
};
