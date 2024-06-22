// DO NOT DELETE

import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const setDogUrl = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        setDogImageUrl(data.message);
      }
    })
    .catch(error => console.error('Error fetching the dog image:', error));
  }

  return (
    <header className="header">
      Hello, world!
      {dogImageUrl && <img className="dogImage" src={dogImageUrl} alt="A Random Dog" />}
      <button onClick={setDogUrl}>更新</button>
    </header>
  );
}
