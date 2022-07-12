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
				mediaLink={props.data.link}
			/>
		</Article>
	);
};

const Article = styled.article`
	display: grid;
	grid-template-columns: 40% 1fr;
	grid-template-rows: 30px 40% 1fr 25px;
	grid-template-areas:
		'image category'
		'image title'
		'description description'
		'information information';
	align-items: start;
	justify-items: center;
	min-width: 320px;
	max-width: 440px;
	width: 100%;
	height: 210px;
	margin: 0 10px;
	margin-bottom: 20px;

	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
`;

const Image = styled.img`
	grid-area: image;
	max-height: 110px;
	width: 100%;
	padding-top: 5px;
	padding-left: 5px;
	border-radius: 10px;
	object-fit: cover;
`;

export default ArticleMedium;
