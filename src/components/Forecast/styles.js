import styled from 'styled-components';

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	overflow: hidden;

	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	background-image: url('${({ theme }) => theme.currentTheme.backgroundImageBig}');
	background-size: 80% 80%;
	background-repeat: no-repeat;

	background-position: 200% -100%;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	min-width: 521px;
	min-height: 440px;

	background-color: ${({ theme }) => theme.currentTheme.backgroundColor};
	background-image: url('${({ theme }) => theme.currentTheme.backgroundImageSmall}');
	background-size: 30%;
	background-repeat: no-repeat;
	background-position: 70% 10%;

	border-radius: 10px;

	box-shadow: 6px 6px 40px -3px rgba(0, 0, 0, 0.25); ;
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
	flex: 1;

	& div:first-child {
		margin-right: 20px;
	}
`;

export const Footer = styled.div`
	padding: 10px 10px;

	border-radius: 0 0 10px 10px;
	background-color: ${({ theme }) => theme.currentTheme.inversedBackground};
`;
