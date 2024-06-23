// @ts-check

import { useState, useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setBreeds(data.message);
        }
      })
      .catch(error => console.error('Error fetching the breeds list:', error));
  }, []);
}

export default DogListContainer

// 犬種一覧データを保持するために、useStateでbreedsとsetBreedsを定義する。
// useEffectとFetch関数を使って犬種一覧を取得し、用意したstateに格納する。
// APIのレスポンスから、犬種リストの配列を生成して、breedsに格納するようにしてください
// 2階層以降は無視して良いです！（例：australianの中のshepherdはbreedsに含めなくてOK）