import styled from 'styled-components';

export const SearchForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 30px;
	padding: 30px 30px 0;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	flex: 1;
`;
export const CityName = styled.p``;

export const Input = styled.input.attrs({
	type: 'text',
	placeholder: 'Type city name here...',
})`
	color: ${({ theme }) => theme.currentTheme.color};
	margin-left: -10px;
	padding-left: 5px;

	font-size: 26px;
	font-weight: 300;

	border: none;
	border-left: 2px solid transparent;

	background: transparent;
	transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;

	&:hover,
	&:focus {
		border-color: ${({ theme }) => theme.currentTheme.color};
	}
`;

export const Close = styled.span`
	& {
		width: 20px;
		height: 20px;
		position: relative;
		cursor: pointer;
		opacity: 0.3;
		transition: opacity 0.15s ease-in-out;

		&:hover {
			opacity: 1;
		}
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
`;
