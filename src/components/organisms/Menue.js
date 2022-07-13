import styled from 'styled-components';

import SearchMenue from '../molecules/SearchMenue';
import Description from '../atoms/Description';
import Category from '../atoms/Category';
import CloseBtn from '../atoms/CloseBtn';

const Menue = ({ category, setCategory, hiddenMenue, isShow }) => {
	const choseCategory = category;

	const categoryList = [
		'Polityka',
		'Sport',
		'Kryptowaluty',
		'Gaming',
		'Wojna',
		'Technologia',
		'Polska',
	];

	const categoryComponents = categoryList.map(category => {
		if (category === choseCategory) {
			return (
				<Category
					isChose={true}
					setCategory={setCategory}
					categoryList={categoryList}
					hiddenMenue={hiddenMenue}
					key={category}>
					{category}
				</Category>
			);
		} else {
			return (
				<Category
					isChose={false}
					setCategory={setCategory}
					categoryList={categoryList}
					hiddenMenue={hiddenMenue}
					key={category}>
					{category}
				</Category>
			);
		}
	});

	return (
		<>
			<BlurElement isShow={isShow} />
			<MenuePopup isShow={isShow}>
				<SearchMenue />
				<Description />

				{categoryComponents}

				<CloseBtn hiddenMenue={hiddenMenue} />
			</MenuePopup>
		</>
	);
};

const MenuePopup = styled.div`
	position: fixed;
	top: 0;
	right: -100vw;
	min-width: 275px;
	max-width: 400px;
	width: 70%;
	height: 440px;
	z-index: 2;

	border-radius: 0px 0px 0px 20px;
	background-color: #fff;
	transition: transform 0.3s ease-in-out;

	transform: ${props => (props.isShow ? 'translateX(-100vw)' : null)};
`;

const BlurElement = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 2;

	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(2px);

	transition: opacity 0.3s ease-in-out;
	opacity: ${props => (props.isShow ? '1' : '0')};
	display: ${props => (props.isShow ? 'block' : 'none')};
`;

export default Menue;
