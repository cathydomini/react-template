import {useState, useEffect} from 'react';
import './Slider.css';

import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';

const Slide = ({slides}) => {
  const [current, setCurrent] = useState (0);
  const len = slides.length;

  const nextSlide = () => {
    setCurrent (current == len - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent (current === 0 ? len - 1 : current - 1);
  };
  useEffect (() => {
    const timer = setTimeout (() => {
      setCurrent (current === len - 1 ? 0 : current + 1);
    }, 8000);
    return () =>clearTimeout(timer);
  }, []);

  if (!Array.isArray (slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slide_container">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      {slides.map ((slide, index) => (
        <div className="slide" key={slide.id}>
           {index === current && <><h2>{slide.name}</h2> <img src={slide.url} alt={slide.name} /></>}
        </div>
      ))}
       <FaChevronRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
};

export default Slide;
