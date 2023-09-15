import { useEffect, useState } from "react";
import styled from "styled-components";
import Filters from "../Filters/Filters";
import List from "../List/List";
import AddTodo from "../AddTodo/AddTodo";

const AppTodos = styled.div`
	display: inline-block;
	min-width: 350px;
    min-height: 300px;
	width: 95%;
    padding: 10px;
	max-width: 600px;
	background-color: #FEFEFE;
	box-shadow: 7px 6px 8px 0px rgba(0, 0, 0, 0.2);;
`
export type TTodos = {
	id: number;
	text: string;
	isComplete: boolean;
}

export type TFilters = 'completed' | 'uncompleted' | 'all';

const Todos = () => {
	const [maxId, setMaxId] = useState(0);
	const [todos, setTodos] = useState<TTodos[]>([]);
	const [filteredTodos, setFilteredTodos] = useState<TTodos[]>([]);
	const [leftItems, setLeftItems] = useState<number>(0);
	const [filter, setFilter] = useState<TFilters>('all');

	const newTodo = (text: string) => {
		setTodos((currentTodos) => [...currentTodos, {id: maxId, text: text, isComplete: false}]);
		setMaxId((cur) => cur + 1);
	};

	const updateTodo = (id: number, status: boolean) => {
		const newTodos = todos.map((todo) => {
			if(todo.id === id) {
				todo.isComplete = status;
			}
			return todo;
		})
		setTodos(newTodos);
	}

	const updateLeftItems = () => {
		const newLeftItems = todos.filter((todo) => todo.isComplete === false).length;
		setLeftItems(newLeftItems);
	}

	const filterTodos = () => {
		let result = [];
		if (filter === 'all') {
			result = todos;
		} else if (filter === 'completed') {
			result = todos.filter((todo) => todo.isComplete === true);
		} else {
			result = todos.filter((todo) => todo.isComplete === false);
		}
		setFilteredTodos(result);
	}

	const clearCompleted = () => {
		const completedTodos = todos.filter((todo) => todo.isComplete === true);
		if (completedTodos.length === 0) return;
		const completedTodosIds = completedTodos.map((todo) => todo.id);
		const result = [];
		for (let i = 0; i < todos.length; i++) {
			if (!(completedTodosIds.includes(todos[i].id))) {
				result.push(todos[i]);
			}
		}
		setTodos(result);
	}

	useEffect(() => {
		updateLeftItems();
		filterTodos();
	// eslint-disable-next-line
	}, [todos]) 

	useEffect(() => {
		filterTodos();
	// eslint-disable-next-line
	}, [filter])

	return(
		<AppTodos>
			<AddTodo create={(note: string) => newTodo(note)}/>
			<List todos={filteredTodos} onChange={(id, status) => updateTodo(id, status)} />
			<Filters leftItems={leftItems} filter={filter} onChange={(newFilter: TFilters) => {if (filter !== newFilter) setFilter(newFilter)}} onDelete={() => clearCompleted()}/>
		</AppTodos>
	);
}

export default Todos;