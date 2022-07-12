import styled, { keyframes, css } from 'styled-components';

import SearchMenue from '../molecules/SearchMenue';
import Description from '../atoms/Description';
import Category from '../atoms/Category';
import CloseBtn from '../atoms/CloseBtn';

const Menue = props => {
	return (
		<>
			<BlurElement isShow={props.isShow} />
			<MenuePopup isShow={props.isShow}>
				<SearchMenue />
				<Description />

				<Category isChose={false}>Polityka</Category>
				<Category isChose={false}>Sport</Category>
				<Category isChose={false}>Kryptowaluty</Category>
				<Category isChose={true}>Gaming</Category>
				<Category isChose={false}>Wojna</Category>
				<Category isChose={false}>Tchnologia</Category>
				<Category isChose={false}>Wiadomości z kraju</Category>

				<CloseBtn hiddenMenue={props.hiddenMenue} />
			</MenuePopup>
		</>
	);
};

const MenuePopup = styled.div`
	position: fixed;
	top: 0;
	right: -275px;
	width: 275px;
	height: 440px;
	z-index: 2;

	border-radius: 0px 0px 0px 20px;
	background-color: #fff;
	transition: transform 0.3s ease-in-out;

	transform: ${props => (props.isShow ? 'translateX(-275px)' : null)};
`;

const BlurElement = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vh;
	height: 100%;
	z-index: 2;

	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(2px);

	transition: opacity 0.3s ease-in-out;
	opacity: ${props => (props.isShow ? '1' : '0')};
	display: ${props => (props.isShow ? 'block' : 'none')};
`;

export default Menue;
