//require('./item.css');

import React from 'react'
import Reflux from 'reflux'

import { Link } from 'react-router'
import mobileUtils from '../../../utils/mobile-utils'

var Customer = React.createClass({

  render: function() {
     var itemStyle = {
        transitionDelay: this.props.index * 0.1 + 's'
      };

    return (
      <li style={itemStyle} className='pure-u-1 pure-u-md-1-3 pure-u-lg-1-4' >
        <Link to={'/customers/' + this.props.item.id}>
          <img className={'img-responsive'} src={this.props.item.image} alt="" />
          <div className="appItem-price">{this.props.item.name}</div>
          <div className="goods-name truncate">{this.props.item.description}</div>
        </Link>
      </li>
    );
  }
});

export default Customer
