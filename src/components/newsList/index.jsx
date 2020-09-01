/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles';
import React from 'react';
import { NewsItem } from 'src/components';

export default React.memo(function NewsList({ list = [], loading = false }) {
  return (
    list.length > 0 ? (
      <div className="news-list">
        {
          list.map((item) => (
            <NewsItem
              key={item.news_id}
              category={item.category}
              date={item.date}
              img={item.img_url}
              source={item.source_name}
              title={item.title}
              url={item.url}
            />
          ))
        }
      </div>
    ) : (
      <div className="news-list empty">
        {
          loading ? 'Cargando...' : '📰 Sin noticias!'
        }
      </div>
    )
  );
});
