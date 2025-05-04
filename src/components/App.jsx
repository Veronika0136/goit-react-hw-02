import React, { useEffect } from 'react';
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

  const resetFeedback = () => {
    setCounter({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveFeedback = totalFeedback > 0 ? Math.round((counter.good / totalFeedback) * 100) : 0;

  //   const feedbackData = {
  //     ...counter,
  //     totalFeedback,
  //     positiveFeedback,
  //   };

  //   useEffect(() => {
  //     JSON.parse(localStorage.getItem('feedbackData'));
  //   }, []);

  useEffect(() => {
    const savedData = localStorage.getItem('feedbackData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setCounter({
        good: parsedData.good,
        neutral: parsedData.neutral,
        bad: parsedData.bad,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(counter));
  }, [counter]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          counter={counter}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
