import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
  state = {
    question: {
      optionOne: {},
      optionTwo: {}
    },
    authorAvatar: ''
  }

  componentDidMount() {
    const currentQuestion = this.props.questions[this.props.match.params.id]

    this.setState(() => ({
      question: currentQuestion,
      authorAvatar: this.props.users[currentQuestion.author].avatarURL
    }));
  }

  render() {
    const { question } = this.state
    return (
      <div>
        <h1>Would You Rather?</h1>
        <p>Posted By: {question.author}</p>
        <img width='30px' src={this.state.authorAvatar} />
        <ol>
          <li>
            {question.optionOne.text}
          </li>
          <li>
            {question.optionTwo.text}
          </li>
        </ol>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users
  }
}

export default connect(mapStateToProps)(Question);