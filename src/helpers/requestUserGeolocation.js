import { DEFAULT_CITY } from './constants';

export const requestUserGeolocation = (loadForecast, showError) => {
	window.navigator.geolocation.getCurrentPosition(
		(position) => successLocationFound(position, loadForecast),
		(error) => noLocationFound(error, loadForecast)
	);

	const successLocationFound = async (position, loadForecast) => {
		try {
			const { latitude, longitude } = position.coords;
			await loadForecast({ coords: [latitude, longitude] });
		} catch (e) {
			showError(e.message);
		}
	};

	const noLocationFound = async (error, loadForecast) => {
		try {
			await loadForecast({ city: DEFAULT_CITY });
			console.error('Permission problem', error.message);
		} catch (error) {
			showError(error.message);
		}
	};
};
