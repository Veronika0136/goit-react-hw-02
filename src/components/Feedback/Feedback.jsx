import React from 'react';
import s from './Feedback.module.css';

const Feedback = ({ counter }) => {
  return (
    <div className={s.counter}>
      <p>Good: {counter.good}</p>
      <p>Neutral: {counter.neutral} </p>
      <p>Bad: {counter.bad}</p>
    </div>
  );
};

export default Feedback;
