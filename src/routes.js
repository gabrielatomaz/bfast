import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Index, Items, Login, Registration } from './views/index'

const Routes = () => (
    <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/items" component={Items} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Registration} />
    </Switch>
)

export default Routes;