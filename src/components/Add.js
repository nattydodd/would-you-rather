import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from '../actions/shared';

class Add extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    error: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      error: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.optionOne || !this.state.optionTwo) {
      this.setState(() => ({
        error: 'Please fill out both options'
      }))
      return;
    }

    const question = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authedUser
    }

    this.props.dispatch(saveQuestion(question))
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div>
        <h1>Would You Rather?</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="optionOne">Option 1</label>
          <input
            id="optionOne"
            value={this.state.optionOne}
            onChange={this.handleChange}
          />
          <label htmlFor="optionTwo">Option 2</label>
          <input
            id="optionTwo"
            value={this.state.optionTwo}
            onChange={this.handleChange}
          />
          <button type='submit'>
            Create Poll
          </button>
          <p>{this.state.error}</p>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Add);