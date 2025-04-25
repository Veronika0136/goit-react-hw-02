import React from 'react';
import s from './Options.module.css';

const Options = ({ updateFeedback }) => {
  return (
    <div className={s.btns}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {/* <button>Reset</button> */}
    </div>
  );
};

export default Options;
