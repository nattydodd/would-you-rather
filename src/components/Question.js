import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerOption from './AnswerOption';
import { saveQuestionAnswer } from '../actions/shared';

class Question extends Component {

  vote = (option) => {
    let answerObj = {
      authedUser: this.props.authedUser,
      qid: this.props.match.params.id,
      answer: option
    }
    this.props.dispatch(saveQuestionAnswer(answerObj));
  }

  render() {
    const { users, authedUser } = this.props
    const currentQuestion = this.props.questions[this.props.match.params.id];

    if (!currentQuestion) {
      return (
        <div>
          404 NOT FOUND
        </div>
      )
    }

    const totalVotes = currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length

    return (
      <div>
        <h1>Would You Rather?</h1>
        <p>Posted By: {currentQuestion.author}</p>
        <img width='30px' src={users[currentQuestion.author].avatarURL} />
        <ol>
          {['optionOne', 'optionTwo'].map(option =>
            <AnswerOption
              key={option}
              option={option}
              text={currentQuestion[option].text}
              questionAnswered={
                currentQuestion.optionOne.votes.includes(authedUser) ||
                currentQuestion.optionTwo.votes.includes(authedUser)
              }
              authedUser={authedUser}
              votePercentage={
                Math.round(currentQuestion[option].votes.length / totalVotes * 100)
              }
              userVoted={currentQuestion[option].votes.includes(authedUser)}
              vote={this.vote}
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