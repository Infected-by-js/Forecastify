import styled from 'styled-components';
import { DEVICE_SIZE } from '../../helpers/constants';

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	overflow: hidden;

	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	background-image: url('${({ theme }) => theme.currentTheme.backgroundImageBig}');
	background-size: 600px 600px;
	background-repeat: no-repeat;
	background-position: top right;
	transition: 0.3s ease-in-out;

	@media ${DEVICE_SIZE.mobile} {
		overflow-y: auto;
		height: 100%;
	}

	@media ${DEVICE_SIZE.tablet} {
		overflow: hidden;
		height: 100vh;
	} ;
`;

export const Container = styled.div`
	margin: 20px;

	display: flex;
	flex-direction: column;

	min-width: 540px;
	min-height: 440px;

	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	background-image: url('${({ theme }) => theme.currentTheme.backgroundImageSmall}');
	background-size: 30%;
	background-repeat: no-repeat;
	background-position: 70% 10%;
	transition: 0.3s ease-in-out;

	border-radius: 10px;

	box-shadow: 6px 6px 40px -3px rgba(0, 0, 0, 0.25);

	@media ${DEVICE_SIZE.mobile} {
		min-width: 300px;
	}

	@media ${DEVICE_SIZE.tablet} {
		min-width: 400px;
	} ;
`;

export const Main = styled.div`
	padding: 0 30px;

	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const MainBanner = styled.div`
	margin-bottom: 40px;

	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex: 1;

	& div:first-child {
		margin-right: 20px;
	}

	@media ${DEVICE_SIZE.mobile} {
		flex-direction: column-reverse;
	}

	@media ${DEVICE_SIZE.tablet} {
		flex-direction: row;
	} ;
`;

export const Footer = styled.div`
	padding: 10px 10px;

	border-radius: 0 0 10px 10px;
	background-color: ${({ theme }) => theme.currentTheme.inversedBackground};
`;
