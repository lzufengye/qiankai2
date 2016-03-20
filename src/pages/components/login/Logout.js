import React from 'react'
import auth from '../../../utils/auth'

const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
    $('.product-category').css('visibility', 'hidden')
  },

  render() {
    return <p>You are now logged out</p>
  }
})

export default Logout
