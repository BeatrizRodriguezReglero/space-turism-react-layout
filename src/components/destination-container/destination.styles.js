import styled from 'styled-components';

const StyledDestination = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 157px;
	padding: 76px 24px;
`;
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 445px;
	margin-left: 157px;
`;
const StyledContainerTitle = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
`;
const StyledTitle = styled.span`
	font-size: 28px;
	font-weight: ${({ $bold }) => ($bold ? 'bold' : 'normal')};
	color: ${({ $color }) => $color};
	font-family: 'Barlow Condensed', sans-serif;
	letter-spacing: 2.7px;
`;
const StyledContainerImage = styled.div`
	width: 445px;
	height: 445px;
	margin-left: 63.5px;
`;
const StyledImage = styled.img`
	width: 100%;
	margin: 32px auto 26px auto;
`;

const StyledTab = styled.span`
	font-size: 16px;
	font-family: 'Barlow Condensed', sans-serif;
	letter-spacing: 2.7px;
	border-bottom: ${({ $active }) => ($active ? '3px solid white' : 'none')};
	text-align: center;
	color: ${({ $active }) => ($active ? 'white' : '#D0D6F9')};
	padding-bottom: 8px;

	cursor: pointer;
`;
const StyledContainerTab = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	gap: 27px;
	padding-top: 64px;
`;
const StyledContainerSite = styled.div`
	padding-top: 20px;
	padding-bottom: 32px;
	border-bottom: 1px solid #383b4b;
	text-align: left;
`;
const StyledTitleSite = styled.h2`
	font-size: 56px;
	font-family: 'Bellefair', serif;
	font-weight: lighter;

	color: white;
`;
const StyledInfoSite = styled.p`
	line-height: 25px;
	font-size: 15px;
`;

const StyledContainerDistanceAndTravel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	gap: 32px;
	padding: 32px 0 58px 0;
`;
const StyledDistanceTravel = styled.p`
	font-size: 14px;
	font-family: 'Barlow Condensed', sans-serif;
	letter-spacing: 2.36px;
`;
const StyledDistanceTravelInfo = styled.p`
	font-size: 28px;
	font-family: 'Bellefair', serif;
	color: white;
	padding-top: 12px;
`;

export {
	StyledDestination,
	StyledContainer,
	StyledContainerTitle,
	StyledTitle,
	StyledContainerImage,
	StyledImage,
	StyledContainerTab,
	StyledTab,
	StyledContainerSite,
	StyledTitleSite,
	StyledInfoSite,
	StyledContainerDistanceAndTravel,
	StyledDistanceTravel,
	StyledDistanceTravelInfo
};
