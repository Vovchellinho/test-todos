import React, { useRef, useState } from "react";
import styled from 'styled-components';

const AddTodoWrapper = styled.div`
	display: flex;
	width: 100%;
`
const InputTodo = styled.input`	
	display: block;
    width: 80%;
    height: 30px;
    text-align: center;
	font-style: italic;
    font-size: 16px;
	background: #FEFEFE;
	border: none;
    color: #4D4D4D;
	&:focus {
		outline: none;
		border: 1px solid #FEFEFE;
	}
	&::placeholder {
		color: #E6E6E6;
	}
`;
const ButtonTodo = styled.button`	
	display: inline-block;
	width: 20%;
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
`;

type TAddTodo = {
	create: (text: string) => void;
}

const AddTodo = ({ create }: TAddTodo) => {
	const [textTodo, setTextTodo] = useState('');
	const refInput = useRef<HTMLInputElement>(null);

	const result = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		refInput.current!.value = '';
		if (textTodo.trim() !== '') {
			create(textTodo);
		}
		setTextTodo('');
	}
	return(
		<AddTodoWrapper>
			<InputTodo placeholder="What needs to be done?" onChange={(e) => setTextTodo(e.target.value)} ref={refInput}/>
			<ButtonTodo type="reset" onClick={(e) => result(e)}>Add</ButtonTodo>
		</AddTodoWrapper>
	);
}

export default AddTodo;