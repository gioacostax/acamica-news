/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { combineReducers } from 'redux';
import news from './news';

export { actions as news } from './news';

export default combineReducers({
  news
});
