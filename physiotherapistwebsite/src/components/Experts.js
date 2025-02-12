
import React, { useState, useEffect } from 'react';
import './Experts.css';
import ExpertsCards from './ExpertsCards';
import Expertscards from './Expertscards.json';

export default function Experts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const totalCards = Expertscards.length;
  const maxIndex = totalCards - cardsToShow;

  
  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth < 768 ? 1 : 3);
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const moveNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  return (
    <div className='maincontainer'>
      <div className='container'>
        <div className='innercontainer'>
          <div className='meetHead'>
            <h1>Meet Our Experts</h1>
          </div>
          <div className='carouselContainer'>
            <div
              className='cardOutercontainer'
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                transition: 'transform 0.5s ease',
              }}
            >
              {Expertscards.map((ele, index) => (
                <ExpertsCards
                  key={index}
                  image={require(`../images/${ele.image}`)} // Dynamically import the image
                  drname={ele.drname}
                  designation={ele.designation}
                  degree={ele.degree}
                  experience={ele.Experience}
                  pain1={ele.pain1}
                  pain2={ele.pain2}
                  pain3={ele.pain3}
                />
              ))}
            </div>
          </div>
          <div className='buttonContainer'>
            <button className='carouselButton' onClick={movePrev}>
              Previous
            </button>
            <button className='carouselButton' onClick={moveNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
