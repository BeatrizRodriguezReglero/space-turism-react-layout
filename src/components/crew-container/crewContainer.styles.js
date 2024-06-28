import styled from 'styled-components';

const StyledContainerCrew = styled.div`
	padding: 0px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 32px;
	padding-bottom: 54px;
`;
const StyledContainerTitle = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
`;
const StyledTitle = styled.span`
	font-weight: ${({ $bold }) => ($bold ? 'bold' : 'normal')};
	color: ${({ $color }) => $color};
	font-family: 'Barlow Condensed', sans-serif;
	letter-spacing: 2.7px;
`;
const StyledContainerImage = styled.div`
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #383b4b;
	height: 223px;
`;
const StyledImage = styled.img`
	height: 222px;
`;
const StyledContainerCircle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 16px;
`;

const StyledCircle = styled.div`
	width: 10px;
	height: 10px;
	background-color: ${({ $active }) => ($active ? 'white' : '#464a50')};

	border-radius: 50%;
`;

const StyledContainerInfo = styled.div`
	text-align: center;
`;

const StyledPosition = styled.p`
	font-size: 16px;
	font-family: 'Bellefair', serif;
	color: #909196;
`;
const StyledName = styled.p`
	font-size: 24px;
	font-family: 'Bellefair', serif;
	color: white;
	padding: 8px 0 16px 0;
`;
const StyledInfo = styled.p`
	line-height: 25px;
	font-size: 15px;
`;
export {
	StyledContainerCrew,
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
