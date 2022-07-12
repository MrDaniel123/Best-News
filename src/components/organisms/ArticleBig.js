import styled from 'styled-components';

import CategoryName from '../atoms/CategoryName';
import ArticleTitle from '../atoms/ArticleTitle';
import ArticleSectionInformation from '../molecules/ArticleSectionInformation';
import ArticleDescription from '../atoms/ArticleDescription';

const ArticleBig = ({ dataArticle }) => {
	const [data] = dataArticle;
	console.log(data);

	return (
		<Article>
			<Image src={data.media} alt='' />
			<CategoryName categoryName={'Gaming'} />
			<ArticleTitle description={data.title} bigFontSize={true} />

			<ArticleDescription description={data.summary} type={'big'} />

			<ArticleSectionInformation
				time={data.published_date}
				editorialOffice={data.rights}
				mediaLink={data.link}
			/>
		</Article>
	);
};

const Article = styled.article`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	min-width: 320px;
	max-width: 440px;
	width: 100%;
	margin: 0 10px;

	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	margin-bottom: 20px;
`;

const Image = styled.img`
	min-width: 300px;
	width: 95%;
	height: 150px;
	margin-bottom: 12px;
	margin-top: 10px;
	border-radius: 10px;
	object-fit: cover;
`;

export default ArticleBig;
