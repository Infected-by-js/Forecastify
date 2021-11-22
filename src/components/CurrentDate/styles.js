import styled from 'styled-components';

export const MainTitle = styled.h1`
	text-transform: uppercase;
	text-align: end;
	font-weight: 800;
	font-size: 34px;
	line-height: 1;

	letter-spacing: 1px;
	margin-bottom: 15px;
`;

export const Date = styled.span`
	display: block;

	margin-bottom: 5px;

	font-size: 22px;
	line-height: 1;
	font-weight: 300;
	text-align: end;

	&:nth-child(3) {
		margin-bottom: 20px;
	}
`;

export const Time = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	font-size: 22px;
	line-height: 1;
	font-weight: 500;

	& svg {
		margin-left: 15px;

		width: 22px;
		height: 22px;
	}
`;
