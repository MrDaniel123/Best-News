import styled from 'styled-components';

import Logo from '../atoms/Logo';
import HamburgerMenue from '../atoms/HamburgerMenue';
import Header from '../atoms/Header';

const Navigation = ({ showMenue }) => {
	return (
		<NavigationWrap>
			<Logo />
			<Header />
			<HamburgerMenue showMenue={showMenue} />
		</NavigationWrap>
	);
};

const NavigationWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	margin-bottom: 20px;
`;

export default Navigation;
