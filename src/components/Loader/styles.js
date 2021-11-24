import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: translate(-50%,-50%) rotate(0deg) scale(1)  ;}
  100% { transform: translate(-50%,-50%) rotate(360deg) scale(1.2) ; }

`;

export const LoaderWrapp = styled(motion.div)`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
`;

export const Loader = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;

	width: 170px;
	height: 170px;

	border: 16px solid ${({ theme }) => theme.currentTheme.inversedBackground};
	border-radius: 50%;
	border-top: 16px solid ${({ theme }) => theme.currentTheme.spinnerColor};
	border-bottom: 16px solid ${({ theme }) => theme.currentTheme.spinnerColor};

	transform: translate(-50%, -50%);

	animation: ${spin} 2s linear infinite alternate;
`;
