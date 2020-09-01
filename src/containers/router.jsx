/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { News, Menu } from 'src/containers';

export default function Router() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/" component={News} />
        <Route path="/news" component={News} />
        <Redirect from="*" to="/404.html" />
      </Switch>
    </div>
  );
}
