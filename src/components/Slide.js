import {useState, useEffect} from 'react';
import './Slide.css';

const Slide = ({images}) => {
  const [curr, setCurr] = useState (0);

  useEffect (() => {
    const len = images.length;
    console.log (len);
    setTimeout (() => {
      setCurr (curr === len - 1 ? 0 : curr + 1);
    }, 5000);
  });

  if (!Array.isArray (images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="slide">
      {images.map ((item, index) => (
        <div className="slide" key={index}>
            {index === curr &&
          (<><h1>{item.caption}</h1><img src={item.url} title={item.caption} /></>)}
        </div>
      ))}
    </div>
  );
};

export default Slide;
