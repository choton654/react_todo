import React, { Component } from 'react';
import Todo from './todo';
import TodoForm from './todoform';
import { v4 as uuidv4 } from 'uuid';
import './todolist.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: uuidv4(), task: 'Milk Cat' },
				{ id: uuidv4(), task: 'Buy Food' },
			],
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}

	create(item) {
		const newItem = { ...item, id: uuidv4(), completed: true };
		this.setState({
			todos: [...this.state.todos, newItem],
		});
	}
	remove(id) {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id),
		});
	}

	update(id, updatedtask) {
		const updatedTodo = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updatedtask };
			}
			return todo;
		});
		this.setState({
			todos: updatedTodo,
		});
	}

	toggleCompletion(id) {
		const updatedTodo = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({
			todos: updatedTodo,
		});
	}

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				key={todo.id}
				id={todo.id}
				task={todo.task}
				completed={todo.completed}
				removeTodo={this.remove}
				updatedTodo={this.update}
				toggleComplete={this.toggleCompletion}
			/>
		));
		return (
			<div className='TodoList'>
				<h1>
					Todo List <span>Create your daily todo lists</span>
				</h1>
				<ul>{todos}</ul>
				<TodoForm addTodo={this.create} />
			</div>
		);
	}
}
export default TodoList;
