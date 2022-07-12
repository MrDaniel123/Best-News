import styled from 'styled-components';

import CategoryName from '../atoms/CategoryName';
import ArticleTitle from '../atoms/ArticleTitle';
import ArticleSectionInformation from '../molecules/ArticleSectionInformation';
import ArticleDescription from '../atoms/ArticleDescription';
const ArticleMedium = props => {
	return (
		<Article>
			<Image src={props.data.media} alt='' />
			<CategoryName categoryName={'Gaming'} />
			<ArticleTitle description={props.data.title} bigFontSize={false} />
			<ArticleDescription description={props.data.summary} type={'medium'} />

			<ArticleSectionInformation
				time={props.data.published_date}
				editorialOffice={props.data.rights}
			/>
		</Article>
	);
};

const Article = styled.article`
	display: grid;
	grid-template-columns: 100px 1fr;
	grid-template-rows: 30px 70px 1fr 20px;
	grid-template-areas:
		'image category'
		'image title'
		'description description'
		'information information';
	align-items: center;
	justify-items: center;
	width: 320px;
	margin-bottom: 20px;

	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
`;

const Image = styled.img`
	grid-area: image;
	width: 80px;
	height: 80px;
	margin-bottom: 12px;
	margin-top: 10px;
	border-radius: 10px;
	object-fit: cover;
`;

export default ArticleMedium;
