import * as S from './styles';

import { CurrentDate } from '../CurrentDate';
import { CurrentWeather } from '../CurrentWeather';
import { SearchForm } from '../SearchForm';
import { Summary } from '../Summary';
// import { UpcomingForecast } from '../UpcomingForecast/';

export const Forecast = ({ getForecast, forecast }) => {
	const cityName = `${forecast.location.name}, ${forecast.location.country}`;

	return (
		<S.Container>
			<SearchForm getForecast={getForecast} cityName={cityName} />

			<S.Main>
				<S.MainBanner>
					<CurrentWeather
						temp={forecast.current.temp_c}
						weatherText={forecast.current.condition.text}
						weatherIcon={forecast.current.condition.icon}
					/>
					<CurrentDate />
				</S.MainBanner>
				<Summary />
			</S.Main>

			<S.Footer>{/* <UpcomingForecast /> */}</S.Footer>
		</S.Container>
	);
};
