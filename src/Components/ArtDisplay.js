import React from 'react';
import './ArtDisplay.css';
import Media from 'react-media';
import DescriptionText from './DescriptionText';
import {
  useParams
} from "react-router-dom";
import artwork from '../data';

const ArtDisplay = () => {
  let { id } = useParams();
  let art = artwork.find((art) => art.id === parseInt(id));
  return (
    <div className='d-flex'>
      <Media query='(min-width: 1400px)'>
        {(matches) =>
          matches ? (
            <>
              <div className='d-flex flex-column'>
                <div className='artwork-container text-left mx-5'>
                  {art.photoSet.map((photo) => (
                    <img src={photo} alt='' />
                  ))}
                </div>
              </div>
              <div className='d-flex flex-column'>
                <div className='description mx-5 pt-5'>
                  <p> TITLE: {art.name}</p>
                  <p> CLIENT: {art.client}</p>
                  <p> YEAR: {art.year}</p>
                  <p> TECHNIQUE: {art.technique}</p>
                </div>
                <DescriptionText>{art.description}</DescriptionText>
              </div>
            </>
          ) : (
            <div className='d-flex flex-column w-100  pt-5'>
              <div className='description mx-5 mb-5 mt-1 d-flex flex-column align-items-center'>
                <p> TITLE: {art.name}</p>
                <p> CLIENT: {art.client}</p>
                <p> YEAR: {art.year}</p>
                <p> TECHNIQUE: {art.technique}</p>
              </div>
              <div className='artwork-container text-center'>
                {art.photoSet.map((photo) => (
                  <img src={photo} alt='' />
                ))}
              </div>
              <DescriptionText>{art.description}</DescriptionText>
            </div>
          )
        }
      </Media>
    </div>
  );
};

export default ArtDisplay;
