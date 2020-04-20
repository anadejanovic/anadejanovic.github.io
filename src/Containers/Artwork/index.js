import React, { Component } from 'react';
import './Artwork.css';
import artwork from '../../data';
import { Link } from 'react-router-dom';

class Artwork extends Component {
  render() {
    return (
      <div className='artwork'>
        <div className='art-container'>
          {artwork.map((art) => (
            <Link to={`/artwork/${art.id}`}>
              <div className='artwork-element'>
                <img className='art-image' src={art.cover} alt='' />
                <p className='image-title mt-1 mb-4 '>{art.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Artwork;
