import styled from 'styled-components';

export const ErrorWrapp = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	padding: 30px;
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const OutClickOverlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;

	background-color: rgba(0, 0, 0, 0.2);
	cursor: pointer;
`;

export const ErrorMessage = styled.span`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	padding: 50px;

	display: flex;
	align-items: center;
	justify-content: center;

	width: fit-content;
	height: 50px;

	color: #000;
	font-weight: 800;
	font-size: 22px;
	background-color: #fff;
	border-radius: 10px;

	z-index: 2;
	user-select: none;
`;

export const Close = styled.button`
	position: absolute;
	right: 5px;
	top: 5px;
	width: 32px;
	height: 32px;
	opacity: 0.3;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
	&:before,
	&:after {
		position: absolute;
		top: 10px;
		left: 10px;
		content: ' ';
		height: 15px;
		width: 2px;
		background-color: #000;
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`;
