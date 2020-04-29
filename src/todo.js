import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handelRemove = this.handelRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handelUpdate = this.handelUpdate.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handelUpdate(e) {
    e.preventDefault();
    this.props.updatedTodo(this.props.id, this.state.task);
    this.setState({
      isEditing: false,
    });
  }

  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handelRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleTodo() {
    this.props.toggleComplete(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className='Todo'>
          <form className='Todo-edit-form' onSubmit={this.handelUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handelChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='Todo'>
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.toggleTodo}>
            {this.props.task}
          </li>
          <div className='Todo-buttons'>
            <button onClick={this.toggleForm}>
              <i class='fas fa-pen' />
            </button>
            <button onClick={this.handelRemove}>
              <i class='fas fa-trash' />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
