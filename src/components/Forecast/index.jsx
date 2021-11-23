import * as S from './styles';

import { CurrentDate } from '../CurrentDate';
import { CurrentWeather } from '../CurrentWeather';
import { SearchForm } from '../SearchForm';
import { Summary } from '../Summary';
// import { UpcomingForecast } from '../UpcomingForecast/';

export const Forecast = ({ getForecast, forecast }) => {
	const cityName = `${forecast.location.name}, ${forecast.location.country}`;
	const { sunrise, sunset } = forecast.forecast.forecastday[0].astro;

	return (
		<S.Container>
			<SearchForm getForecast={getForecast} cityName={cityName} />

			<S.Main>
				<S.MainBanner>
					<CurrentWeather
						temp={forecast.current.temp_c}
						weatherDescription={forecast.current.condition.text}
						weatherIcon={forecast.current.condition.icon}
					/>
					<CurrentDate
						weekday={forecast.currentDate.weekday}
						date={forecast.currentDate.date}
						time={forecast.currentDate.time12h}
					/>
				</S.MainBanner>
				<Summary
					humidity={forecast.current.humidity}
					wind={forecast.current.wind_mph}
					sunrise={sunrise}
					sunset={sunset}
				/>
			</S.Main>

			<S.Footer>
				<UpcomingForecast />
			</S.Footer>
		</S.Container>
	);
};
