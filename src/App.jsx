// DO NOT DELETE

import './App.css'
import { useState, useEffect } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setDogImageUrl(data.message);
        }
      })
      .catch(error => console.error('Error fetching the dog image:', error));
  }, []);

  return (
    <header>
      Hello, world!
      <img src={dogImageUrl} alt="A Random Dog" />
    </header>
  );
}
