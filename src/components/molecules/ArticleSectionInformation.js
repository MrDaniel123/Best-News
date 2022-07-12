import styled from 'styled-components';

import arrow from '../../assets/Arrow.png';

const ArticleSectionInformation = ({ time, editorialOffice, mediaLink }) => {
	return (
		<InformationSection>
			<ArticleInformation>{editorialOffice}</ArticleInformation>
			<ArticleInformation>{time}</ArticleInformation>

			<Link href={mediaLink}>
				<img src={arrow} alt='Reference' />
			</Link>
		</InformationSection>
	);
};

const InformationSection = styled.div`
	grid-area: information;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 10px;
	padding: 0 10px;
`;

const ArticleInformation = styled.p`
	font-size: 11px;
	color: rgba(0, 0, 0, 0.4);
`;

const Link = styled.a`
	text-decoration: none;
	background-color: #fff;
	cursor: pointer;
`;

export default ArticleSectionInformation;
