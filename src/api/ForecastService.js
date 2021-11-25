import axios from 'axios';

export default class ForecastService {
	static #API_KEY = process.env.REACT_APP_API_KEY;
	static #PATH = 'https://api.weatherapi.com/v1/forecast.json';

	static async getForecast({ city = '', coords = [] }) {
		const response = await axios.get(ForecastService.#PATH, {
			params: {
				key: ForecastService.#API_KEY,
				q: city || String(coords),
			},
		});

		return response;
	}
}
