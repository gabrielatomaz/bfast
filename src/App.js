import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from './store'
import './style.scss'
import { Index, Items, Login, Registration } from './views/index'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/items" component={Items} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Registration} />
            </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
