import styled from 'styled-components';

const ArticleTitle = ({ description, bigFontSize }) => {
	const descriptionFormating = description.slice(0, 60);

	return <Title bigFontSize={bigFontSize}>{descriptionFormating}...</Title>;
};

const Title = styled.h2`
	grid-area: title;
	font-size: ${props => (props.bigFontSize ? '20px' : '16px')};
	font-weight: bold;
	width: 100%;
	margin-bottom: 12px;
	text-align: center;
	color: rgba(58, 58, 58, 0.9);
	letter-spacing: 0.3px;
	padding-left: 10px;
	padding-right: 10px;
`;

export default ArticleTitle;
