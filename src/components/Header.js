import Slider from './Slider';
import {useState, useEffect, React} from 'react';

const Header = () => {
  const [data, setData] = useState ([]);

  useEffect (() => {
    fetch ('https://api.thedogapi.com/v1/images/search?limit=10')
      .then (res => {
        if (!res.ok) {
          throw Error ('Error fetching the cute doggie');
        }
        return res.json ();
      })
      .then (data => {
        //extract the data for slider
        let slideData = data.map (item => {
          return {
            name: item.breeds[0] === undefined ? null : item.breeds[0].name,
            url: item.url,
            id: item.id,
          };
        });
        setData (slideData);
      })
      .catch (err => {
        throw Error (err.message);
      });
  }, []);
  return (
    <div>
      <Slider slides={data} />
    </div>
  );
};

export default Header;
