import styled from 'styled-components';

import InputSearch from '../atoms/InputSearch';
import Button from '../atoms/Button';

const SearchMenue = () => {
	return (
		<Wrapper>
			<InputSearch />
			<Button />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 45px;

	background: #ffffff;
	box-shadow: 0px -1px 7px #000000;
`;

export default SearchMenue;
