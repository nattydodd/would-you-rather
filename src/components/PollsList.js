import React from 'react';
import { Link } from 'react-router-dom';

const PollsList = (props) => {
  return (
    <tbody>
      {props.polls.map(poll => (
        <tr key={poll.id}>
          <td>
            <Link to={`/questions/${poll.id}`}>
              {poll.id}
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default PollsList;