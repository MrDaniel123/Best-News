import styled from 'styled-components';

const Category = props => {
	return (
		<CategoryWrap>
			<Circle></Circle>
			<ButtonCategogry>
				{props.isChose ? (
					<CategoryNameIsChoice>{props.children}</CategoryNameIsChoice>
				) : (
					<CategoryNameIsNotChoice>{props.children}</CategoryNameIsNotChoice>
				)}
			</ButtonCategogry>
		</CategoryWrap>
	);
};

const CategoryWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	margin-left: 10px;
	margin-bottom: 12px;
`;

const Circle = styled.div`
	height: 7px;
	width: 7px;
	border-radius: 50%;
	margin-right: 8px;

	background: linear-gradient(135deg, #ff007a 15.28%, #000000 87.5%);
`;

const ButtonCategogry = styled.button`
	border: none;
	background-color: #fff;
`;

const CategoryNameIsNotChoice = styled.p`
	font-weight: bold;
	font-size: 20px;
	color: #5e5e5e;
`;

const CategoryNameIsChoice = styled.p`
	font-weight: bold;
	font-size: 20px;
	background: linear-gradient(93.32deg, #312f8f 1.43%, #d000a2 103.17%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
`;

export default Category;
