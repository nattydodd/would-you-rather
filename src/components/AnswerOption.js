import React from 'react';
import styles from  './styles/Question.module.scss';

const AnswerOption = (props) => {
  const {
    text,
    questionAnswered,
    votePercentage,
    userVoted,
    vote,
    option,
    voteCount
  } = props;
  return (
    <li className={styles.option}>
      <p>...{text}?</p>
      {questionAnswered ?
        <div>
          <p className={styles.votes}>Votes: {votePercentage}%</p>
          <p className={styles.votes}>Number of votes: {voteCount}</p>
        </div>
        :
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={() => vote(option)}>
            VOTE
          </button>
        </div>
      }
      {userVoted && (
        <p className={styles.yourVote}>
          You Voted!
        </p>
      )}
    </li>
  )
}

export default AnswerOption;