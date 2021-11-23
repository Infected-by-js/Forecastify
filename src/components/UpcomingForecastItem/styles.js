import styled from 'styled-components';

export const UpcomingForecastItem = styled.li`
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 2px solid transparent;
	border-radius: 10px;
	transition: border-color 0.1s ease-in-out;

	user-select: none;

	&:hover {
		border-color: ${({ theme }) => theme.currentTheme.color};
	}
`;
export const Title = styled.h3`
	margin-bottom: 5px;

	font-size: 16px;
	font-weight: 500;
	line-height: 1;

	color: ${({ theme }) => theme.currentTheme.color};
`;
export const Icon = styled.img`
	width: 50px;
	margin-bottom: 5px;
`;

export const Temp = styled.span`
	font-size: 16px;
	font-weight: 300;
	line-height: 1;

	color: ${({ theme }) => theme.currentTheme.color};
`;
