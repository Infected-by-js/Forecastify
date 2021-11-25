import styled from 'styled-components/macro';
import { DEVICE_SIZE } from '../../helpers/constants';

export const Wrapp = styled.div`
	margin-bottom: 15px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media ${DEVICE_SIZE.mobile} {
		flex-direction: column;
		align-items: stretch;

		div:first-of-type {
			margin-bottom: 20px;
		}
	}

	@media ${DEVICE_SIZE.tablet} {
		flex-direction: column;
		align-items: stretch;

		div:first-of-type {
			margin-bottom: 10px;
		}
	}
`;

export const Col = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	div:first-of-type {
		margin-right: 20px;
	}

	@media ${DEVICE_SIZE.mobile} {
		div:first-of-type {
			margin-right: 0;
			margin-bottom: 0;
		}
	}
`;
export const InfoItem = styled.div`
	display: flex;
	align-items: center;

	span:first-of-type {
		margin-right: 5px;
	}
`;
export const IconWrapp = styled.span`
	svg {
		width: 18px;
		height: 18px;

		g {
			stroke: ${({ theme }) => theme.currentTheme.color};
		}
	}
`;
export const Value = styled.span`
	font-size: 16px;
	font-weight: 300;

	color: ${({ theme }) => theme.currentTheme.color};

	user-select: none;
`;
