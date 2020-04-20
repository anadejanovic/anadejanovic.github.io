import React, { Component } from 'react';
import './About.css';
import aboutImage from '../../assets/about.jpg';

class AboutPage extends Component {
  render() {
    return (
      <div className='about mt-5 pt-4 mb-5'>
        <div className='row'>
          <div className='col-2'>&nbsp;</div>
          <div className='col-8'>
            <p className='about-text'>
              Illustrator. Occasional photographer. <br />
              <br />
              Born in Yugoslavia. Raised in Croatia. Based in Rijeka. Lived in
              Zagreb and Berlin. <br />
              <br />
              My interests lie mostly within editorial and cover illustration. .
              <br />
              <br />
              Digging inspiration from everyday life, wise Mother Nature and
              dystopian books.
            </p>
            <img className='img-fluid' src={aboutImage} alt="about" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
