import styled from 'styled-components';

import logo from '../../assets/Logo.png';

const Logo = () => {
	return <LogoImage src={logo} alt='App Logo' />;
};

const LogoImage = styled.img`
	margin: 5px;
`;

export default Logo;
