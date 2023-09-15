import './App.css';
import styled from 'styled-components';
import Todos from './components/Todos/Todos';

const AppWrapper = styled.div`
	max-width: 1080px;
	text-align: center;
	margin: 0 auto;
	min-width: 350px;
` 
const AppHeader = styled.h1`
	color: #E9D9D8;
	font-size: 90px;
	font-weight: 100;
`

const  App = () => {
  return (
    <AppWrapper>
		<AppHeader>todos</AppHeader>
		<Todos />
	</AppWrapper>
  );
}

export default App;
