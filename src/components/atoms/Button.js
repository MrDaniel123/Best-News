import styled from 'styled-components';

const Button = () => {
	return <Btn>Szukaj</Btn>;
};

const Btn = styled.button`
	width: 60px;
	height: 32px;
	border: none;

	background-color: #fff;
	color: #d4d1d1;

	background: linear-gradient(103.35deg, #0c08d2 1.92%, #ae2020 99.96%);
	border-radius: 5px;
`;

export default Button;
