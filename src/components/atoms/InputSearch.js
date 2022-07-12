import styled from 'styled-components';

const InputSearch = () => {
	return (
		<BorderInput>
			<Input type='text' placeholder='Wyszukaj Newsa' />
		</BorderInput>
	);
};

const Input = styled.input`
	height: 28px;
	/* min-width: 196px; */
	width: 98%;
	font-size: 12px;
	color: #7c7c7c;
	padding: 5px;
	background-color: #fff;
	border: none;
	border-radius: 3px;
`;

const BorderInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 32px;
	width: 75%;
	border-radius: 5px;

	background-image: linear-gradient(
		90deg,
		rgba(6, 3, 152, 1),
		rgba(174, 32, 32, 1),
		rgba(177, 12, 12, 1)
	);
`;

export default InputSearch;
