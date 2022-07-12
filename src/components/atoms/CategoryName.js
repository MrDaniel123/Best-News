import styled from 'styled-components';

const CategoryName = ({ categoryName }) => {
	return (
		<CategoryWrap>
			<Category>
				<Name>{categoryName}</Name>
				<Circle></Circle>
			</Category>
		</CategoryWrap>
	);
};

const CategoryWrap = styled.div`
	display: flex;
	align-items: center;
	grid-area: category;
	width: 100%;
	margin-left: 20px;
	margin-top: 10px;
`;

const Category = styled.div`
	display: flex;
	align-items: center;
	padding: 1px 5px;
	width: min-content;

	background: linear-gradient(
		270deg,
		#c213ff 0%,
		rgba(0, 56, 255, 0.83) 97.78%
	);
	border-radius: 28px;
`;

const Name = styled.p`
	font-size: 12px;
	color: #fff;
`;

const Circle = styled.div`
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background-color: #fff;
	margin-left: 5px;
`;

export default CategoryName;
