import { useEffect, useState } from "react";
import { TTodos } from "../Todos/Todos";
import styled from 'styled-components';

type TItemTodo = {
	todo: TTodos;
	onChange: (id: number, status: boolean) => void;
}

const ItemWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	background-color: #FFFFFF;
	min-height: 30px;
	border-top: 1px solid #E6E6E6;
	border-left: 1px solid #E6E6E6;
	border-right: 1px solid #E6E6E6;
	color: #4D4D4D;
	font-size: 16px;
	&:last-child {
		border-bottom: 1px solid #E6E6E6;
	}
`
const Label = styled.label`
	display: flex;
	user-select: none;
    align-items: center;
	width: 100%;
	cursor: pointer;
`
const ItemText = styled.div<{checked: boolean}>`
	display: inline-block;
	min-width: 80%;
	color: ${({ checked }) => checked ? '#E6E6E6' : '#4D4D4D'};
	text-decoration: ${({ checked }) => checked ? 'line-through' : 'none'};
`
const InputCheck = styled.input`
	display: inline-block;
	width: 16px;
	height: 16px;
	border: 1px solid #E6E6E6;
	border-radius: 50%;
	box-sizing: border-box;
	appearance: none;
	&:checked {
		position: relative;
		border: 1px solid #C5DAD6;
		background: white;
		&:after {
			content: "";
			position: absolute;
			left: 2px;
			top: -1px;
			width: 13px;
			height: 6px;
			border-left: 1px solid #77C0AF;
			border-bottom: 1px solid #77C0AF;
			rotate: 310deg;
		}
	}
`
const ItemTodo = ({ todo, onChange }: TItemTodo) => {
	const [isChecked, setIsChecked] = useState(todo.isComplete);

	const changeStatus = (id: number) => {
		const status = !isChecked;
		onChange(id, status);
		setIsChecked(status);
	}

	useEffect(() => {
	}, [isChecked]);

	return(
		<ItemWrapper>
			<Label>
				<InputCheck type="checkbox" checked={todo.isComplete} onChange={() => changeStatus(todo.id)}/>
				<ItemText checked={isChecked}>{todo.text}</ItemText>
			</Label>
		</ItemWrapper>
	);
}

export default ItemTodo;