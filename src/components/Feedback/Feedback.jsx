import React from 'react';
import s from './Feedback.module.css';

const Feedback = ({ counter, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.counter}>
      <p>Good: {counter.good}</p>
      <p>Neutral: {counter.neutral} </p>
      <p>Bad: {counter.bad}</p>
      <p>Total: {totalFeedback} </p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
