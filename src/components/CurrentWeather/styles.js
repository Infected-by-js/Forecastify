import styled from 'styled-components';

export const MainTempWrapp = styled.div`
	margin-bottom: 10px;

	display: flex;
	justify-content: center;

	user-select: none;
`;

export const Temp = styled.span`
	font-size: 90px;
	line-height: 1;
	font-weight: 300;

	color: ${({ theme }) => theme.currentTheme.color};

	user-select: none;
`;
export const Unit = styled.span`
	font-weight: 300;
	font-size: 24px;
	line-height: 1;

	color: ${({ theme }) => theme.currentTheme.color};

	vertical-align: top;
`;

export const MainWeatherWrapp = styled.div`
	padding: 5px 0 5px 15px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	overflow: hidden;
	border: 2px solid transparent;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.currentTheme.inversedBackground};

	transition: border-color 0.15s ease-in-out;
	&:hover {
		border-color: ${({ theme }) => theme.currentTheme.color};
	}
`;

export const Weather = styled.span`
	margin-right: 5px;

	line-height: 1;
	font-size: 24px;
	font-weight: 300;

	color: ${({ theme }) => theme.currentTheme.color};
`;
