import React from 'react'

var SectionTitle = React.createClass({
  render: function () {
    var style = {
      backgroundImage: 'url(' + this.props.backgroundImage + ')',
    };

    var shadowMarginLeft = {
      marginLeft: this.props.shadowMarginLeft
    }

    return (
      <div className='section-title' style={style}>
        <div className='section-shadow' style={shadowMarginLeft}>
          <image src={this.props.sectionIcon}/>
          <br/>
          {this.props.sectionTitle}
        </div>
      </div>
    );
  }
});

export default SectionTitle