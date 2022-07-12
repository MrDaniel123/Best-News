import styled from 'styled-components';

const Description = () => {
	return <DescriptionFont>Wybierz Kategorie</DescriptionFont>;
};

const DescriptionFont = styled.p`
	font-size: 24px;
	font-weight: bold;
	margin: 10px;

	background: linear-gradient(
		90.41deg,
		#001aff 1.55%,
		#471d31 46.52%,
		#eb0d83 100.79%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
`;

export default Description;
