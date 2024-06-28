import styled from 'styled-components';

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 48px;
	color: white;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 16px;
	height: 96px;
	width: 830px;
	position: relative;
	z-index: 2;
	&::before {
		content: '';
		height: 96px;
		width: 830px;
		background-color: rgba(255, 255, 255, 0.2);
		right: 10px;
		position: absolute;
		z-index: -1;
	}
`;
const StyledNumber = styled.span`
	font-weight: bold;
	padding-right: 12px;
`;

export { StyledMenu, StyledNumber };