import React from 'react';

import CopyChange from './CopyChange';

const Results = ({ shortLinksList, copyHandler }) => {
  const shortLinksListCopy = shortLinksList;

  const shortLinksListMap = shortLinksListCopy.map((item, index) => (

    <CopyChange key={index} {...item} onCopy={copyHandler}  />
  ));

  return (
    <section className='results'>
      <div className='results__container mw'>{shortLinksListMap}</div>
    </section>
  );
};

export default Results;
