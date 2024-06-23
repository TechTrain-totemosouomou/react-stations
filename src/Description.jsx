// @ts-check

import { useState } from 'react';
import DogImage from './DogImage';

/**
 * @type {() => JSX.Element}
 */
export const Description = () => {
  const [imageUrl, setImageUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const setDogUrl = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setImageUrl(data.message);
        }
      })
      .catch(error => console.error('Error fetching the dog image:', error));
  }

  return (
    <div>
      <DogImage imageUrl={imageUrl} />
      <button onClick={setDogUrl}>更新</button>
    </div>
  );
}

export default Description;
