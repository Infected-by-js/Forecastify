import styled from 'styled-components';

export const ItemWrapp = styled.div`
	display: flex;
	align-items: center;

	span:first-of-type {
		margin-right: 5px;
	}
`;
export const IconWrapp = styled.span`
	display: flex;
	align-items: center;

	svg {
		width: 18px;
		height: 18px;

		g {
			stroke: ${({ theme }) => theme.currentTheme.color};
		}
	}
`;
export const Value = styled.span`
	font-size: 18px;
	font-weight: 300;

	color: ${({ theme }) => theme.currentTheme.color};

	user-select: none;
`;
