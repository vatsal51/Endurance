import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Result = ({ linkFrom, linkTo, onCopy }) => {
  const handleCopiedBtnStyle = (e) => {
    document.querySelectorAll('.result__btn').forEach((btn) => {
      btn.textContent = 'Copy';
      btn.classList.remove('result__btn--active');
    });

    e.target.textContent = 'Copied!';
    e.target.classList.add('result__btn--active');
  };

  return (
    <div className='result'>
      <div className='result-links-wrap'>
        <p className='result-from'>{linkFrom}</p>
        <p className='result-to'>{linkTo}</p>
      </div>
      <CopyToClipboard text={linkTo} onCopy={onCopy}>
        <button onClick={handleCopiedBtnStyle} className='result-btn'>
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Result;
