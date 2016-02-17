import React from 'react'

var SectionTitle = React.createClass({
  render: function () {
    var style = {
      backgroundImage: 'url(' + this.props.backgroundImage + ')',
    }

    return (
      <div className='section-title' style={style}>
        <div className='section-shadow'>
          <image src={this.props.sectionIcon}/>
          <br/>
          {this.props.sectionTitle}
        </div>
      </div>
    );
  }
});

export default SectionTitle