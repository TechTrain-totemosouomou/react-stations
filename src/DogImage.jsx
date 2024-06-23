// @ts-check

/**
 * DogImageコンポーネントのプロパティの型定義
 * @param {{ imageUrl: string }} props
 * @returns {JSX.Element}
 */
export const DogImage = ({ imageUrl }) => {
  return (
    <img className="dog_image" src={imageUrl} alt="A Random Dog" />
  );
}

export default DogImage;

// 犬の画像を表示するDogImageコンポーネントを作成して、それをDescriptionコンポーネントから呼び出すようにする。