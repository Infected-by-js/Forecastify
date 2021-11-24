import axios from 'axios';

export default class ForecastService {
	static #API_KEY = 'b747702425614679a3981747212211';
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
