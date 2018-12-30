import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Home.module.scss';

const PollsList = (props) => {
  return (
    <tbody className={styles.tableBody}>
      {props.polls.map(poll => (
        <tr key={poll.id} className={styles.poll}>
          <td>
            <h4 className={styles.subtitle}>Would You Rather?</h4>
            <p className={styles.option}>{poll.optionOne.text}</p>
            <p className={styles.divider}>OR...</p>
            <p className={styles.option}>{poll.optionTwo.text}</p>
            <Link to={`/questions/${poll.id}`} className={styles.link}>
              View Poll
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default PollsList;