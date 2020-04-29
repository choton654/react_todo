import React, { Component } from 'react';
import './todoform.css';
class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.handelChange = this.handelChange.bind(this);
		this.handelSubmit = this.handelSubmit.bind(this);
	}
	handelSubmit(e) {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({ task: '' });
	}
	handelChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	render() {
		return (
			<div>
				<h1>{this.state.task}</h1>
				<form className='NewTodoForm' onSubmit={this.handelSubmit}>
					<label htmlFor='todo'>Add Todos</label>
					<br />
					<input
						id='todo'
						type='text'
						name='task'
						value={this.state.task}
						onChange={this.handelChange}
					/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}
export default TodoForm;
