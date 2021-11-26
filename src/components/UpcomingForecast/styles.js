import styled from 'styled-components';
import { DEVICE_SIZE } from '../../helpers/constants';

export const UpcomingForecast = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media ${DEVICE_SIZE.mobile} {
		overflow-x: auto;
		align-items: center;
		justify-content: flex-start;
	}
`;
