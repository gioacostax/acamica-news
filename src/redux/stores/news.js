/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* Actions Types */
const CLEAR_NEWS = 'NEWS.CLEAR_NEWS';
const SET_LOADING = 'NEWS.SET_LOADING';
const SET_ERROR = 'NEWS.SET_ERROR';
const SET_NEWS = 'NEWS.SET_NEWS';

/* Private Actions */
const getNews = (type, value) => async (dispatch) => {
  // Limpiamos la lista de noticias
  dispatch({ type: CLEAR_NEWS });

  // Reseteamos errores
  dispatch({ type: SET_ERROR, value: null });

  // Activamos loading
  dispatch({ type: SET_LOADING, value: true });

  // Configuramos la URL según el requerimiento
  const url = {
    latest: `https://api.canillitapp.com/latest/${value}`,
    category: `https://api.canillitapp.com/news/category/${value}`,
    search: `https://api.canillitapp.com/search/${value}`
  }[type];

  try {
    // Traemos las noticias
    let data = await fetch(url);
    if (!data.ok) throw Error(data.statusText);

    // Transformamos la información
    data = await data.json();

    // Despachamos nuevos estados
    dispatch({ type: SET_NEWS, value: data.slice(0, 10) }); // Mostramos solo 10 articulos
    dispatch({ type: SET_LOADING, value: false });
  } catch (error) {
    // En caso de error, despachamos la acción correspondiente
    dispatch({ type: SET_LOADING, value: false });
    dispatch({ type: SET_ERROR, value: error.message });
  }
};

/* Public Actions */
const getLatestNews = (value = new Date().toISOString().split('T')[0]) => getNews('latest', value);
const getCategoryNews = (value = '1') => getNews('category', value);
const searchNews = (value = 'virus') => getNews('search', value);

export const actions = { getLatestNews, getCategoryNews, searchNews };

/* Initial State */
const initialState = {
  list: [],
  loading: false,
  error: null,
};

/* Reducer */
export default (state = initialState, { type, value }) => {
  switch (type) {
    case CLEAR_NEWS: {
      return {
        ...state,
        list: []
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: value
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: value
      };
    }

    case SET_NEWS: {
      return {
        ...state,
        list: value
      };
    }

    default: {
      return state;
    }
  }
};
