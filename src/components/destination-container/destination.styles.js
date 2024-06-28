import styled from 'styled-components';

const StyledDestination = styled.div`
	text-align: center;
	padding: 0px 24px;
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
const StyledImage = styled.img`
	width: 170px;
	height: 170px;
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
`;
const StyledContainerTab = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 27px;
`;
const StyledContainerSite = styled.div`
	padding-top: 20px;
	padding-bottom: 32px;
	border-bottom: 1px solid #383b4b;
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
	flex-direction: column;
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
	StyledContainerTitle,
	StyledTitle,
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
