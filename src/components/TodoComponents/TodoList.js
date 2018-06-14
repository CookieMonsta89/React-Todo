
import React from 'react';
import Todo from './Todo';
import './Todo.css';




const TodoList = (props) => {
    return(////todostyle for styling/////
        <ul className="todostyle">
            {props.todoList.map((list, i) => {
                return <Todo onClick = {props.onclick} key =
                {list.id} todo={list.task} />
            })}
        </ul>/////this code is filtering and mapping over list and returning todo/////
    )
}

export default TodoList;

