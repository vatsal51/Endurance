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
      <div className='result__links-wrap'>
        <p className='result__from'>{linkFrom}</p>
        <p className='result__to'>{linkTo}</p>
      </div>
      <CopyToClipboard text={linkTo} onCopy={onCopy}>
        <button onClick={handleCopiedBtnStyle} className='result__btn'>
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Result;
