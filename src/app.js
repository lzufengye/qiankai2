import React from 'react'
import Header from './pages/products/components/header/header'
import Footer from './footer'
import auth from './utils/auth'

export default React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

