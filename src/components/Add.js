import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from '../actions/shared';
import styles from './styles/Add.module.scss';

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
      <div className={styles.container}>
        <h1 className={styles.title}>
          Would You Rather?
        </h1>
        <form className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="optionOne">
            Option 1
          </label>
          <input
            id="optionOne"
            className={styles.input}
            value={this.state.optionOne}
            onChange={this.handleChange}
          />
          <label htmlFor="optionTwo">
            Option 2
          </label>
          <input
            id="optionTwo"
            className={styles.input}
            value={this.state.optionTwo}
            onChange={this.handleChange}
          />
          <button className={styles.button}
            type='submit'>
            Create Poll
          </button>
          <p>
            {this.state.error}
          </p>
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