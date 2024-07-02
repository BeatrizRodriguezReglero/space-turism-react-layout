import styled from 'styled-components';

const StyledContainerTitle = styled.div`
	display: flex;
	justify-content: left;
	gap: 16px;
	padding-bottom: 32px;
	padding-left: 166.5px;
	padding-top: 76px;
`;
const StyledTitle = styled.span`
	font-weight: ${({ $bold }) => ($bold ? 'bold' : 'normal')};
	color: ${({ $color }) => $color};
	font-size: 28px;
	font-family: 'Barlow Condensed', sans-serif;
	letter-spacing: 2.7px;
`;

const StyledContainerInfo = styled.div`
	display: flex;
	flex-direction: row;
	padding-left: 166.5px;
`;

const StyledContainerTerm = styled.div`
	width: 60%;

	margin-right: 130px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 80px;
`;
const StyledContainerImage = styled.div`
	width: 40%;
`;
const StyledImage = styled.img`
	width: 100%;
`;
const StyledContainerTab = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 32px;
	padding-top: 34px;
	padding-bottom: 26px;
`;

const StyledTab = styled.div`
	background-color: ${({ $active }) => ($active ? 'white' : 'transparent')};
	color: ${({ $active }) => ($active ? 'black' : '#D0D6F9')};
	border: 1px solid white;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 32px;
	font-family: 'Bellefair', serif;
	cursor: pointer;
`;

const StyledTerm = styled.p`
	font-size: 16px;
	font-family: 'Barlow Condensed', sans-serif;
	letter-spacing: 2.7px;
`;
const StyledTitleTerm = styled.p`
	font-size: 56px;
	font-family: 'Bellefair', serif;
	color: white;
	padding-top: 11px;
	padding-bottom: 17px;
`;

const StyledInfoTerm = styled.p`
	font-size: 18px;
	line-height: 32px;
	font-family: 'Barlow', sans-serif;
`;
export {
	StyledContainerTitle,
	StyledTitle,
	StyledContainerTerm,
	StyledContainerInfo,
	StyledContainerImage,
	StyledImage,
	StyledContainerTab,
	StyledTab,
	StyledTerm,
	StyledTitleTerm,
	StyledInfoTerm
};
