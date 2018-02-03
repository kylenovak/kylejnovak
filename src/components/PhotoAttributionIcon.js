import React, { Component } from 'react';

class PhotoAttributionIcon extends Component {
  render() {
    return (
      <i id="photo-attribution-icon" onClick={this.props.onClickHandler} className="fas fa-info-circle" title="Image info"></i>
    );
  }
}

export default PhotoAttributionIcon;
