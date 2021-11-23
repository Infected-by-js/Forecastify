import styled from 'styled-components';

export const MainTempWrapp = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10px;

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
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 5px;
	border-top: 2px dashed ${({ theme }) => theme.currentTheme.color};

	overflow: hidden;
`;

export const Weather = styled.span`
	margin-right: 5px;

	line-height: 1;
	font-size: 24px;
	font-weight: 300;

	color: ${({ theme }) => theme.currentTheme.color};
`;
