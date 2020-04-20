import React, { Component } from 'react';

class Description extends Component {
  state = {
    isDescriptionVisible: false,
  };

  handleLink = () => {
    let link = document.getElementById('info-link');
    link.innerHTML =
      link.innerHTML === 'More information' ? 'Less' : 'More information';
    this.setState({ isDescriptionVisible: !this.state.isDescriptionVisible });
  };

  render() {
    return (
      <>
        <div className='info-wrapper mx-5'>
          <a href='javascript:void(0)' id='info-link' onClick={this.handleLink}>
            More information
          </a>
        </div>
        <div
          className={
            this.state.isDescriptionVisible
              ? 'description-text mx-5 mb-5 pt-3 d-block'
              : 'description-text description-text-hidden  pl-5 pt-3'
          }>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Description;
