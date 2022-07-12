import styled from 'styled-components';

import hamburgerMenueIcon from '../../assets/MenueBtn.png';

const HamburgerMenue = props => {
	return (
		<LogoBtn onClick={props.showMenue}>
			<img src={hamburgerMenueIcon} alt='Show Menue' />
		</LogoBtn>
	);
};

const LogoBtn = styled.button`
	all: unset;
	margin: 5px;
`;

export default HamburgerMenue;
