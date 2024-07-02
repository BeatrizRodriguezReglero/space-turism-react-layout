import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 24px;
	margin-left: 165px;
	margin-top: 251px;
	padding-bottom: 131px;
`;
const StyledContainerText = styled.div`
	width: 450px;
`;

const StyledSubtitle = styled.h2`
	font-size: 28px;
	font-family: 'Barlow Condensed', sans-serif;
`;

const StyledTitle = styled.h1`
	font-size: 150px;
	font-family: 'Bellefair', serif;
	font-weight: normal;
	color: white;
	padding: 16px 0;
`;

const StyledText = styled.p`
	font-size: 18px;
	line-height: 25px;
	text-align: justify;
`;

const StyledContainerCircle = styled.div`
	background-color: white;
	border-radius: 50%;
	width: 274px;
	height: 274px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 81px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const StyledTextCircle = styled.p`
	font-size: 32px;
	font-family: 'Bellefair', serif;
	letter-spacing: 1.25px;
	color: #0b0d17;
`;

export {
	StyledContainer,
	StyledContainerText,
	StyledSubtitle,
	StyledTitle,
	StyledText,
	StyledContainerCircle,
	StyledTextCircle
};
