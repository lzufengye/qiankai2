import React from 'react'
import NavLink from './nav-link'
import Header from './header'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

