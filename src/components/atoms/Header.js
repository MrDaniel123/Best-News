import styled from 'styled-components';

const Header = () => {
	return <AppHeader>Najlepsze Newsy</AppHeader>;
};

const AppHeader = styled.h1`
	font-size: 24px;
	font-weight: bold;
	font-family: 'Russo One', sans-serif;
	letter-spacing: 1.3px;

	background: linear-gradient(90.09deg, #513844 0.08%, #c80060 99.93%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
`;

export default Header;
