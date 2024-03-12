import React, { useState, useRef, useEffect } from 'react';

const Carousel = ({ items, height = '200px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = carouselRef.current.offsetWidth;
      setSlideWidth(containerWidth / 3); // Adjust for 3 cards per slide
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const handleNext = () => {
    const maxIndex = Math.floor(items.length / 3) - 1; // Calculate the last valid index
    const nextIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = currentIndex === 0 ? Math.floor(items.length / 3) - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const transformStyle = {
    transform: `translateX(-${currentIndex * slideWidth}px)`,
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div ref={carouselRef} className="carousel relative overflow-hidden h-full" style={{ height }}>
      {/* Slide container with adjusted width */}
      <div className="carousel-container grid grid-cols-3 gap-4" style={transformStyle}>
        {items.slice(currentIndex * 3, (currentIndex + 1) * 3).map((item, index) => (
          <div
            key={index}
            className="carousel-item overflow-hidden rounded-lg h-full" // Adjust styles as needed
          >
            <img src={item.imageUrl} alt={item.altText} className="w-full h-[230px] object-cover" />
            <span className="text-white bg-gray-900 bg-opacity-50 absolute bottom-0 ">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </span>
          </div>
        ))}
      </div>

      {/* Navigation buttons (optional) */}
      <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full hover:bg-gray-200">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8L8.5 12.5L15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full hover:bg-gray-200">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 8L15.5 12.5L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;

