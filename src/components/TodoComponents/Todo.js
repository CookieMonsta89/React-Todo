
import React from 'react';
import './Todo.css'



const Todo = (props) => {
    
    return(
        <li> {props.todo} </li>////putting array into a list 
    )
}



export default Todo;