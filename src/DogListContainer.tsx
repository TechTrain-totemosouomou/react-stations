// @ts-check

import { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';
import DogImage from './DogImage';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher');
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setBreeds(data.message); // 犬種の配列をstateに設定
        }
      })
      .catch(error => console.error('Error fetching the breeds list:', error));
  }, []);

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreed(event.target.value); // 選択した犬種をstateに設定
  };

  const setDogBreed = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        setImageUrls(data.message);
      }
    })
    .catch(error => console.error('Error fetching the breeds list:', error));
  };

  return (
    <div className="breeds_list">
      <BreedsSelect breeds={Object.keys(breeds)} selectedBreed={selectedBreed} onSelectChange={selectChange} />
      <button onClick={setDogBreed}>表示</button>
      <ul className="dog_image_list">
        {imageUrls.map((imageUrl, index) => (
          <li key={index}>
            <DogImage imageUrl={imageUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogListContainer

// 1.犬種一覧データを保持するために、useStateでbreedsとsetBreedsを定義する。
// 2.useEffectとFetch関数を使って犬種一覧を取得し、用意したstateに格納する。
// 3.APIのレスポンスから、犬種リストの配列を生成して、breedsに格納するようにしてください

// 2階層以降は無視して良いです！（例：australianの中のshepherdはbreedsに含めなくてOK）
// 選択した犬種はuseStateでselectedBreedとsetSelectedBreedを定義する。（DogListContainerコンポーネントで定義）
// BreedsSelectコンポーネントは、propsとしてbreeds（犬種一覧の配列）を渡す。代入する変数名もbreedsにする。
// ドロップダウン選択時にselectedBreedに選択した犬種情報を反映させる。
// ドロップダウン選択時にstateを更新する（必要そうなpropsをBreedsSelectに追加しましょう）
// selectタグのvalueにはselectedBreedに入っているデータを利用。（必要そうなpropsをBreedsSelectに追加しましょう）
// 例）<BreedsSelect breeds={breeds} />
