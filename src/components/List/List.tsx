import ItemTodo from "../ItemTodo/ItemTodo";
import { TTodos } from "../Todos/Todos";
import styled from 'styled-components';

type TFilterList = {
	todos: TTodos[];
	onChange: (id: number, status: boolean) => void;
}

const ListWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
	height: 300px;
	margin: 10px 0px;
	padding: 0 20px;
	overflow-y: auto;
	&::-webkit-scrollbar {
        width: 5px;
        border: 1px solid #E6E6E6;
    }
	&::-webkit-scrollbar-thumb {
		background: #E9D9D8;
		border-radius: 5px;
	}
`
const Empty = styled.div`
	display: flex;
	color: #E9D9D8;
	width: 100%;
	height: 100%;
	height: 300px;
	align-items: center;
	justify-content: center;
`
const List = ({ todos, onChange }: TFilterList) => {
	return(
		<ListWrapper>
			{ todos.length ? <>
					{ todos.map((todo) =>
						<ItemTodo key={todo.id} todo={todo} onChange={(id: number, status: boolean) => onChange(id, status)}/>
					)}
				</> : <Empty>
					Empty
				</Empty>
			}
		</ListWrapper>
	);
}

export default List;