import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from "prop-types"
import { withRouter } from "react-router"
import configureStore from './store'
import Routes from './routes'
import { Menu } from './components/index'
import './style.scss'

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render() {
    const { location: { pathname }} = this.props

    console.log(pathname)
    
    return (
      <Provider store={configureStore()}>
        { pathname !== '/register' && pathname !== '/login' && pathname !== '/' &&  <Menu /> }
        <Routes />
      </Provider>
    )
  }
}

export default withRouter(App)
