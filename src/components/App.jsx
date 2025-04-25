import React from 'react';
import { useState } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
  const [counter, setCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setCounter({
      ...counter,
      [feedbackType]: counter[feedbackType] + 1,
    });
  };

  const totalFeedback = counter.good + counter.neutral + counter.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />

      {totalFeedback > 0 ? <Feedback counter={counter} /> : <Notification />}
    </>
  );
};

export default App;
