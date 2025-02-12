import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';
import prettiImage from '../images/pretti.png';
import richaImage from '../images/richa.png';
import gauravImage from '../images/Gaurav_manav_V3.png';

const Carousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [isDoubleClickActivated, setIsDoubleClickActivated] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 1000) {
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const totalCards = 4;
  const maxPosition = -(totalCards - visibleCards);

  const moveCarousel = (direction) => {
    setCurrentPosition((prevPosition) => {
      let newPosition = prevPosition + direction;
      if (newPosition > 0) newPosition = maxPosition;
      else if (newPosition < maxPosition) newPosition = 0;
      return newPosition;
    });
  };

  const handleDoubleClick = () => {
    setIsDoubleClickActivated(true);
    setTimeout(() => setIsDoubleClickActivated(false), 1000); 
  };

  const handleMouseDown = (e) => {
    if (!isDoubleClickActivated) return;
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragOffset > 50 && currentPosition > maxPosition) {
      moveCarousel(-1);
    } else if (dragOffset < -50 && currentPosition < 0) {
      moveCarousel(1);
    }
    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    if (!isDoubleClickActivated) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (dragOffset > 50 && currentPosition > maxPosition) {
      moveCarousel(-1);
    } else if (dragOffset < -50 && currentPosition < 0) {
      moveCarousel(1);
    }
    setDragOffset(0);
  };

  return (
    <div className="container my-5">
      <div
        className="position-relative overflow-hidden cont"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        onDoubleClick={handleDoubleClick} 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className='clientHead'>
          <h1>What our client say</h1>
        </div>
        <button
          className="btn btn-link position-absolute top-50 start-0 translate-middle-y index1"
          onClick={() => moveCarousel(-1)}
          style={{ fontSize: '2em', textDecoration: 'none' }}
        >
          <i className="bi bi-arrow-left-circle"></i>
        </button>

        <div
          className="d-flex"
          style={{
            transform: `translateX(calc(${(100 / visibleCards) * currentPosition}% + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
          }}
        >
          <div className="carousel-card col text-center bg-light border m-2 p-4 imagess contbox" onDoubleClick={handleDoubleClick}>
            <img src={prettiImage} alt="Client Pretti" /> 
          </div>
          <div className="carousel-card col text-center bg-light border m-2 p-4 imagess" onDoubleClick={handleDoubleClick}>
            <img src={richaImage} alt="Client Richa" /> 
          </div>
          <div className="carousel-card col text-center bg-light border m-2 p-4 imagess" onDoubleClick={handleDoubleClick}>
            <img src={gauravImage} alt="Client Gaurav" /> 
          </div>
          <div className="carousel-card col text-center bg-light border m-2 p-4 imagess" onDoubleClick={handleDoubleClick}>
            <img src={prettiImage} alt="Client Pretti" /> 
          </div>
        </div>

        <button
          className="btn btn-link position-absolute top-50 end-0 translate-middle-y index2"
          onClick={() => moveCarousel(1)}
          style={{ fontSize: '2em', textDecoration: 'none' }}
        >
          <i className="bi bi-arrow-right-circle"></i>
        </button>
        <div className='clientMainBtn'>
          <button className='clientbtn'>
            see more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
