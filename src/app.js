import React from 'react'
import Header from './pages/products/components/header/header'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <div>
        <Header display='none'/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

