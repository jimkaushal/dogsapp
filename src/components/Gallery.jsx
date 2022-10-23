import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import Dog from './Dog';

const Gallery = () => {
  const [data, isLoading] = useApi('https://dog.ceo/api/breeds/list/all')
  const [dogs, setDogs] = useState([]);

  useEffect(()=>{
    if (data && dogs.length === 0) {
      generateGallery();
    }
  }, [data, dogs])

  const generateGallery = () => {
    Promise.all(Object.keys(data).map((breed) => {
      return fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(res => res.json()).then(res => ({...res, breed}));
    })).then(result => setDogs(result))
  }
  return (
    <div className="App">
      <div>
          Learn React
      </div>
      <div className="gallery">
      {isLoading ? <div>Loading...</div> : dogs.map(({message, breed}) => <Dog key={message} message={message} breed={breed}/>)}
      </div>
    </div>
  );
}

export default Gallery;
