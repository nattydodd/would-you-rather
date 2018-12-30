import React from 'react';
import styles from  './styles/Question.module.scss';

const AnswerOption = (props) => {
  const { text, questionAnswered, votePercentage, userVoted, vote, option } = props;
  return (
    <li>
      <p>...{text}?</p>
      {questionAnswered ?
        <p className={styles.votes}>Votes: {votePercentage}%</p> :
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={() => vote(option)}>
            VOTE
          </button>
        </div>
      }
      <p>
        {userVoted && 'You Voted!'}
      </p>
    </li>
  )
}

export default AnswerOption;