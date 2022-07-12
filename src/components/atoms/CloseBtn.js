import styled from 'styled-components';

import icon from '../../assets/CloseBtn.png';

const CloseBtn = props => {
	return (
		<CloseButton onClick={props.hiddenMenue}>
			<img src={icon} alt='' />
		</CloseButton>
	);
};

const CloseButton = styled.button`
	position: absolute;
	bottom: 10px;
	left: 10px;
	border: none;
`;

export default CloseBtn;
