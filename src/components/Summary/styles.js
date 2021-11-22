import styled from 'styled-components/macro';

export const Wrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 15px;
`;

export const Col = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	div:first-of-type {
		margin-right: 20px;
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
	}
`;
export const ValueWrapp = styled.span`
	font-size: 16px;
	font-weight: 300;
	user-select: none;
`;
