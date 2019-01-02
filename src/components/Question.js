import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerOption from './AnswerOption';
import { saveQuestionAnswer } from '../actions/shared';
import styles from  './styles/Question.module.scss';

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
        <div className={styles.container}>
          404 NOT FOUND
        </div>
      )
    }

    const totalVotes = currentQuestion.optionOne.votes.length +
      currentQuestion.optionTwo.votes.length

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          Would You Rather...
        </h1>
        <ol className={styles.list}>
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
              voteCount={currentQuestion[option].votes.length}
              userVoted={currentQuestion[option].votes.includes(authedUser)}
              vote={this.vote}
            />
          )}
        </ol>
        <div className={styles['user-data']}>
          <img className={styles['user-image']}
            alt="User Avatar"
            src={users[currentQuestion.author].avatarURL}
          />
          <p className={styles['user-name']}>
            Posted By: {currentQuestion.author}
          </p>
        </div>
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