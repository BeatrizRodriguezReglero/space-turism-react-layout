import styled from 'styled-components';

const StyledContainerCrew = styled.div`
	padding: 0px 24px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 32px;
	padding-bottom: 54px;
	padding-top: 76px;
`;

const StyledContainerLeft = styled.div`
	width: 488px;
	text-align: left;
`;
const StyledContainerTitle = styled.div`
	display: flex;

	gap: 16px;
`;
const StyledTitle = styled.span`
	font-weight: ${({ $bold }) => ($bold ? 'bold' : 'normal')};
	color: ${({ $color }) => $color};
	font-size: 28px;
	font-family: 'Barlow Condensed', sans-serif;
	letter-spacing: 2.7px;
	padding-bottom: 154px;
`;
const StyledContainerImage = styled.div`
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #383b4b;
	width: 568px;
	margin-left: 81px;
`;
const StyledImage = styled.img`
	width: 100%;
`;
const StyledContainerCircle = styled.div`
	display: flex;
	flex-direction: row;

	gap: 16px;
`;

const StyledCircle = styled.div`
	width: 10px;
	height: 10px;
	background-color: ${({ $active }) => ($active ? 'white' : '#464a50')};
	border-radius: 50%;
	cursor: pointer;
`;

const StyledContainerInfo = styled.div`
	text-align: left;
`;

const StyledPosition = styled.p`
	font-size: 32px;
	font-family: 'Bellefair', serif;
	color: #909196;
`;
const StyledName = styled.p`
	font-size: 56px;
	font-family: 'Bellefair', serif;
	color: white;
	padding: 8px 0 16px 0;
`;
const StyledInfo = styled.p`
	line-height: 25px;
	font-size: 18px;
	padding-bottom: 120px;
`;
export {
	StyledContainerCrew,
	StyledContainerLeft,
	StyledContainerTitle,
	StyledTitle,
	StyledContainerImage,
	StyledImage,
	StyledCircle,
	StyledContainerCircle,
	StyledContainerInfo,
	StyledPosition,
	StyledName,
	StyledInfo
};
