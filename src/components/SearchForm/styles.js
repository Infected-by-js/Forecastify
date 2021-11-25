import styled from 'styled-components';
import { DEVICE_SIZE } from '../../helpers/constants';

export const SearchForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 30px;
	padding: 30px 30px 0;

	@media ${DEVICE_SIZE.mobile} {
		padding: 20px 20px 0;
		margin-bottom: 10px;
	}
	@media ${DEVICE_SIZE.mobile} {
		padding: 20px 20px 0;
		margin-bottom: 10px;
	}
`;

export const Label = styled.label`
	display: flex;
	width: 100%;
`;
export const CityName = styled.p``;

export const Input = styled.input.attrs({
	type: 'text',
	placeholder: 'Type city name here...',
})`
	color: ${({ theme }) => theme.currentTheme.color};
	margin-left: -10px;
	margin-right: 20px;
	padding-left: 5px;

	flex: 1;

	font-size: 26px;
	font-weight: 300;
	text-align: left;

	border: none;
	border-left: 2px solid transparent;

	background: transparent;
	transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;

	&:hover,
	&:focus {
		border-color: ${({ theme }) => theme.currentTheme.color};
	}

	@media ${DEVICE_SIZE.mobile} {
		padding-bottom: 5px;
		font-size: 1.5rem;
		margin: 0;
		text-align: center;
		border-left: none;
		border-bottom: 2px solid transparent;

		&:hover,
		&:focus {
			border-color: ${({ theme }) => theme.currentTheme.color};
		}
	}
`;

export const Close = styled.span`
	align-self: center;
	width: 20px;
	height: 20px;
	position: relative;
	cursor: pointer;
	opacity: 0.3;
	transition: opacity 0.15s ease-in-out;

	&:hover,
	&:focus-visible {
		opacity: 1;
	}

	&:after {
		content: '';
		height: 100%;
		border-left: 2px solid ${({ theme }) => theme.currentTheme.color};
		position: absolute;
		transform: rotate(45deg);
		left: 50%;
	}

	&:before {
		content: '';
		height: 100%;
		border-left: 2px solid ${({ theme }) => theme.currentTheme.color};
		position: absolute;
		transform: rotate(-45deg);
		left: 50%;
	}

	@media ${DEVICE_SIZE.mobile} {
		display: none;
	}
`;
