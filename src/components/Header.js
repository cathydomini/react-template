import Slide from './Slide';
import {useState, useEffect, React} from 'react';

const Header = () => {
  const [data, setData] = useState ([]);
  const slideImages = [
    {
      url: 'https://picsum.photos/300',
      caption: 'Slide 1',
    },
    {
      url: 'https://picsum.photos/400',
      caption: 'Slide 2',
    },
    {
      url: 'https://picsum.photos/500',
      caption: 'Slide 3',
    },
  ];

  return (
    <div>
      <Slide images={slideImages} />
    </div>
  );
};

export default Header;
