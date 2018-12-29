import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerOption from './AnswerOption';

class Question extends Component {
  state = {
    question: {
      optionOne: {
        votes: []
      },
      optionTwo: {
        votes: []
      }
    },
    authorAvatar: '',
    questionAnswered: false
  }

  componentDidMount() {
    const currentQuestion = this.props.questions[this.props.match.params.id]

    this.setState(() => ({
      question: currentQuestion,
      authorAvatar: this.props.users[currentQuestion.author].avatarURL,
      questionAnswered: currentQuestion.optionOne.votes.includes(this.props.authedUser.id) ||
        currentQuestion.optionTwo.votes.includes(this.props.authedUser.id),
      totalVotes: currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length
    }));
  }

  render() {
    const { question, totalVotes, authorAvatar, questionAnswered } = this.state
    return (
      <div>
        <h1>Would You Rather?</h1>
        <p>Posted By: {question.author}</p>
        <img width='30px' src={authorAvatar} />
        <ol>
          {['optionOne', 'optionTwo'].map(option =>
            <AnswerOption
              key={option}
              text={question[option].text}
              questionAnswered={questionAnswered}
              authedUser={this.props.authedUser.id}
              votePercentage={Math.round(question[option].votes.length / totalVotes * 100)}
              userVoted={question[option].votes.includes(this.props.authedUser.id)}
            />
          )}
        </ol>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Question);