import { createGlobalStyle } from 'styled-components';

import HomePage from './components/templates/HomePage';

//Reset CSS
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<HomePage />
		</>
	);
}

export default App;
