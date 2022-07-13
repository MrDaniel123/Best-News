import styled from 'styled-components';

import icon from '../../assets/CloseBtn.png';

const CloseBtn = ({ hiddenMenue }) => {
	return (
		<CloseButton onClick={hiddenMenue}>
			<img src={icon} alt='' />
		</CloseButton>
	);
};

const CloseButton = styled.button`
	position: absolute;
	bottom: 10px;
	left: 10px;
	border: none;
	background-color: #fff;
`;

export default CloseBtn;
