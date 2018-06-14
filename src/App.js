import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './app.css';



class App extends React.Component {

  // you will need a place to store your state in this component.

  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props){
    super();
    this.state = {
      input: '',
      todos: [
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        },
        {
          task: 'Chill Out',
          id: 3,
          completed: false
        },
        {
          task: 'Do Nothing',
          id: 3,
          completed: false
        },
        {
          task: 'Stuggle with REACT',
          id: 3,
          completed: false
        }
      ]
    }
  }/////////this code here is creating tasks for the app//////////

  handleChange = (e) =>{
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  };/////this code allows the handle to change

  addTodo = (item) => {
    item.preventDefault();
    let obj={}    
    obj.task = this.state.input;
    obj.id = Math.floor(Date.now() + Math.random());
    obj.completed = false;
    const todo = this.state.todos;
    todo.push(obj);
    this.setState({ todo: todo, input:''  })
  }

  
  
isCompleteCss = (e) => {
  let todos = this.state.todos;
  for(let todo in todos){
    if(todos[todo].task === e.target.outerText) {
      todos[todo].completed = true;
    }
  }
  this.setState({todos: todos});
  e.target.classList.toggle('complete');
}
///this code allows handle change to take input and push it to the list of objects

  render() {
    return (
      <div className='app'>
        <h2>Todo List: MVP</h2>
        <TodoForm 
            onChange={this.handleChange} 
            input={this.state.input} 
            onSubmit={this.addTodo}
        />

        <TodoList todoList={this.state.todos} onClick={this.isCompleteCss}/>  
      </div>  //// line 80 is saying todoList is set to this.state.todos array
    );
  }

}



export default App;
