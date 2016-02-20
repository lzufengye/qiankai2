import React from 'react'

var SectionTitle = React.createClass({
  render () {
    var style = {
      backgroundImage: 'url(' + this.props.backgroundImage + ')'
    };

    var shadowMarginLeft = {
      marginLeft: this.props.shadowMarginLeft
    };

    return (
      <a className='section-title' style={style} href={this.props.href}>
        <div className='section-shadow' style={shadowMarginLeft}>
          <image src={this.props.sectionIcon}/>
          <br/>
          {this.props.sectionTitle}
        </div>
      </a>
    );
  }
});

export default SectionTitle