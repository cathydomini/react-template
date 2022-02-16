import Slider from './Slider';
import {useState, useEffect, React} from 'react';

const Home = () => {
  const [data, setData] = useState ([]);

  useEffect (() => {
    const url = 'https://api.thedogapi.com/v1/images/search?limit=10';
    fetch (url)
      .then (res => {
        if (!res.ok) {
          throw Error ('Error fetching the cute doggie');
        }
        return res.json ();
      })
      .then (data => {
        //extract the data for slider
        let slideData = data
          .filter (item => item.breeds[0] !== undefined)
          .map (item => {
            return {
              name: item.breeds[0].name,
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
      <h1>My Best Paw</h1>
      <Slider slides={data} />
    </div>
  );
};

export default Home;
