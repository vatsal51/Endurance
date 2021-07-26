import React from 'react';

import CopyChange from './CopyChange';

const Results = ({ shortLinksList: shortLinks, copyHandler }) => {
  const shortLinksListMap = shortLinks.map((item, index) => (
    <CopyChange key={index} {...item} onCopy={copyHandler} />
  ));
  return (
    <section className='results'>
      <div className=' mw'>{shortLinksListMap}</div>
    </section>
  );
};

export default Results;
