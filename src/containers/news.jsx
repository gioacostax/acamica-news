/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import qs from 'qs';
import redux, { news } from 'src/redux';
import { NewsList } from 'src/components';
import { useLocation } from 'react-router-dom';

export default function NewsContainer() {
  // Utilizamos Hooks para traer el store y declarar el dispatch para las acciones
  const store = redux.useSelector((states) => states);
  const dispatch = redux.useDispatch();

  // Traemos el query string por medio de hooks
  const location = useLocation();

  // Cada vez que cambia el valor de location.search cargamos la noticias
  useEffect(() => {
    // Interpretamos el query string con la ayuda de la librería qs
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    const key = Object.keys(query)[0];
    const value = query[key] !== '' ? query[key] : undefined;

    // Dependiendo del caso despachamos la acción correspondiente
    switch (key) {
      case 'category':
        dispatch(news.getCategoryNews(value));
        break;

      case 'search':
        dispatch(news.searchNews(value));
        break;

      default:
        // Por defecto traerá las noticias del día
        dispatch(news.getLatestNews(value));
        break;
    }
  }, [location.search, dispatch]);

  return <NewsList list={store.news.list} loading={store.news.loading} />;
}
