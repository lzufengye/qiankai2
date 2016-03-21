import React from 'react'
import auth from '../../../utils/auth'

const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
    $('.product-category').css('visibility', 'hidden')
  },

  render() {
    return <div className='container'>
      <div className='login'>
        <table>
          您已成功退出！
        </table>
      </div>
    </div>
  }
})

export default Logout
