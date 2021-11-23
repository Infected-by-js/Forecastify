import styled from 'styled-components';

export const MainTitle = styled.h1`
	margin-bottom: 15px;

	font-size: 34px;
	font-weight: 800;
	text-align: end;
	line-height: 1;
	text-transform: uppercase;
	letter-spacing: 1px;

	color: ${({ theme }) => theme.currentTheme.color};
`;

export const Date = styled.span`
	margin-bottom: 5px;
	display: block;

	font-size: 22px;
	font-weight: 300;
	line-height: 1;
	text-align: end;

	color: ${({ theme }) => theme.currentTheme.color};

	&:nth-child(3) {
		margin-bottom: 20px;
	}
`;

export const Time = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	font-size: 22px;
	font-weight: 500;
	line-height: 1;

	color: ${({ theme }) => theme.currentTheme.color};

	& svg {
		margin-left: 15px;

		width: 22px;
		height: 22px;

		g {
			stroke: ${({ theme }) => theme.currentTheme.color};
		}
	}
`;
