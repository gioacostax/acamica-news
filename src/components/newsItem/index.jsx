/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React from 'react';
import { OpenInNew } from '@gioacostax/icons';
import defaultImg from 'src/assets/news.jpg';

export default React.memo(function NewsItem({
  category,
  date,
  img,
  source,
  title,
  url
}) {
  return (
    <a target="_blank" rel="noreferrer" href={url} className="news-item" style={{ backgroundImage: `url('${img || defaultImg}')` }}>
      <div className="gradient" />
      { category && <div className="category">{category}</div> }
      <h1 className="title">{title}</h1>
      <p className="meta">
        <span className="source">{source}</span>
        {' | '}
        <span className="date">{new Date(date * 1000).toDateString()}</span>
      </p>
      <div className="hover"><OpenInNew /></div>
    </a>
  );
});
