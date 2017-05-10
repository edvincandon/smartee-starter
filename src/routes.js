import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Routes extends Component {
    render() {
        const routes = [
            {title: 'home', path: '/', component: () => <div>{'SMARTEE'}</div>}
        ];
        return (
          <BrowserRouter>
            <Route render={ ({ location }) => (
                      <Switch key={location.key} location={location}>
                            {routes.map(route => {
                                return (
                                    <Route key={route.title} path={route.path} component={route.component} />
                                );
                            })}
                        </Switch>
            ) } />
          </BrowserRouter>
        );
    }
}
export default Routes;
