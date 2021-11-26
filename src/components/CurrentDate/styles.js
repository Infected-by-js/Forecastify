import styled from 'styled-components/macro';
import { DEVICE_SIZE } from '../../helpers/constants';

export const DateWrapp = styled.div`
	@media ${DEVICE_SIZE.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	@media ${DEVICE_SIZE.tablet} {
		display: flex;
		flex-direction: column;
	}
`;

export const MainTitle = styled.h1`
	margin-bottom: 15px;

	font-size: 34px;
	font-weight: 800;
	text-align: end;
	line-height: 1;
	text-transform: uppercase;
	letter-spacing: 1px;

	color: ${({ theme }) => theme.currentTheme.color};

	@media ${DEVICE_SIZE.mobile} {
		font-size: 30px;
	}
	@media ${DEVICE_SIZE.tablet} {
		font-size: 32px;
	}
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

	@media ${DEVICE_SIZE.mobile} {
		font-size: 20px;
		display: inline-block;

		&:nth-child(3) {
			margin-bottom: 10px;
			float: right;
		}
	}
	@media ${DEVICE_SIZE.tablet} {
		font-size: 22px;
		display: inline-block;
		margin-right: 5px;
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

	@media ${DEVICE_SIZE.mobile} {
		font-size: 18px;
		display: inline-block;
		float: right;
		margin-bottom: 10px;

		& svg {
		margin-left: 10px;

		width: 14px;
		height: 14px;

		
	}
	@media ${DEVICE_SIZE.tablet} {
		font-size: 18px;
		display: inline-block;
		float: right;
		margin-bottom: 20px;

		& svg {
		margin-left: 10px;

		width: 14px;
		height: 14px;

		
	}
	}
`;
