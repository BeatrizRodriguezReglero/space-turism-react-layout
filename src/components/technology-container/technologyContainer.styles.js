import styled from 'styled-components';

const StyledContainerTitle = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
	padding-bottom: 32px;
`;
const StyledTitle = styled.span`
	font-weight: ${({ $bold }) => ($bold ? 'bold' : 'normal')};
	color: ${({ $color }) => $color};
	font-family: 'Barlow Condensed', sans-serif;
	letter-spacing: 2.7px;
`;
const StyledImage = styled.img`
	width: 375px;
`;
const StyledContainerTab = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 16px;
	padding-top: 34px;
	padding-bottom: 26px;
`;

const StyledTab = styled.div`
	background-color: transparent;
	border: 1px solid white;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	font-family: 'Bellefair', serif;
`;
export {
	StyledContainerTitle,
	StyledTitle,
	StyledImage,
	StyledContainerTab,
	StyledTab
};
