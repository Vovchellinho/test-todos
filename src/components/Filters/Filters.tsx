import styled from 'styled-components';
import { TFilters } from '../Todos/Todos';

const FiltersWrapper = styled.div`
	display: flex;
	width: 100%;
	user-select: none;
	align-items: center;
	max-width: 600px;
	min-width: 300px;
	flex-wrap: wrap;
	justify-content: space-between;
    font-size: 16px;
    color: #4D4D4D;
	white-space: nowrap;
`
const FilterChoice = styled.div`
	display: flex;
	min-width: 50%;
    justify-content: space-around;
`
const Filter = styled.div<{filter: string}>`
	display: inline-block;
	cursor: pointer;
	padding: 2px;
	border-radius: 5%;
	border: ${({ filter }) => filter === "true" ? "1px solid #E9D9D8;" : '1px solid #FEFEFE'};
`
const Rest = styled.div`
	min-width: 20%;
	color: #E9D9D8;
	text-align: center;
`
const Clear = styled.button`
	display: inline-block;
	min-width: 30%;
	border: 1px solid #4D4D4D;
	height: 30px;
	text-align: center;
	font-size: 16px;
	background: #FEFEFE;
	cursor: pointer;
	color: #4D4D4D;
	&:active {
		background: #4D4D4D;
		color: #FEFEFE;
	}
`

type TFilter = {
	leftItems: number;
	filter: TFilters;
	onChange: (filter: TFilters) => void;
	onDelete: () => void;
}

const Filters = ({ leftItems, filter, onChange, onDelete }: TFilter) => {
	return(
		<FiltersWrapper>
			<Rest>{leftItems} items left</Rest>
			<FilterChoice>
				<Filter filter={filter === 'all' ? "true" : "false"} onClick={() => onChange('all')}>All</Filter>
				<Filter filter={filter === 'uncompleted' ? "true" : "false"} onClick={() => onChange('uncompleted')}>Active</Filter>
				<Filter filter={filter === 'completed' ? "true" : "false"} onClick={() => onChange('completed')}>Completed</Filter>
			</FilterChoice>
			<Clear onClick={() => onDelete()}>Clear completed</Clear>
		</FiltersWrapper>
	);
}

export default Filters;