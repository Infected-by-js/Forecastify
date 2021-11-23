import styled from 'styled-components';

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

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1;

	padding: 0 30px;
`;

export const MainBanner = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 1;
	margin-bottom: 40px;

	& div:first-child {
		margin-right: 20px;
	}
`;

export const Footer = styled.div`
	padding: 10px 10px;
	border-radius: 0 0 10px 10px;
	background-color: ${({ theme }) => theme.currentTheme.footerBackground};
`;
