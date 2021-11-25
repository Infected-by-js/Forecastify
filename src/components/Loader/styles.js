import styled from 'styled-components';
export const LoaderWrapp = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
`;

export const Loader = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;

	width: 170px;
	height: 170px;

	border: 16px solid ${({ theme }) => theme.currentTheme.inversedBackground};
	border-radius: 50%;
	border-top: 16px solid ${({ theme }) => theme.currentTheme.spinnerColor};
	border-bottom: 16px solid ${({ theme }) => theme.currentTheme.spinnerColor};
`;
