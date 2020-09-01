/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import redux, { store } from 'src/redux';
import { HashRouter } from 'react-router-dom';

import NewsContainer from './news.jsx';
import MenuContainer from './menu.jsx';
import RouterContainer from './router.jsx';

const ReduxProvider = () => <redux.Provider store={store}><NewsContainer /></redux.Provider>;
export const News = /* devblock:start */require('react-hot-loader/root').hot(ReduxProvider)
|| /* devblock:end */ReduxProvider;

const RouterProvider = () => <HashRouter><RouterContainer /></HashRouter>;
export const Router = /* devblock:start */require('react-hot-loader/root').hot(RouterProvider)
|| /* devblock:end */RouterProvider;

export const Menu = /* devblock:start */require('react-hot-loader/root').hot(MenuContainer)
|| /* devblock:end */MenuContainer;
