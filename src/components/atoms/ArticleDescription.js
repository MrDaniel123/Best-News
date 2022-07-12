import styled from 'styled-components';

const ArticleDescription = ({ description, type }) => {
	let descriptionFormating;
	if (type === 'big') {
		descriptionFormating = description.slice(0, 450);
	} else if (type === 'medium') {
		descriptionFormating = description.slice(0, 190);
	} else if (type === 'small') {
		return null;
	}

	return <Description>{descriptionFormating}...</Description>;
};

const Description = styled.p`
	grid-area: description;
	font-size: 10px;
	width: 100%;
	color: rgba(0, 0, 0, 0.6);
	margin-bottom: 12px;
	padding: 0 10px;
`;

export default ArticleDescription;
