// @ts-check

/**
 * BreedsSelectコンポーネントのプロパティの型定義
 * @param {{ breeds: string[], onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void, selectedBreed: string }} props
 * @returns {JSX.Element}
 */
export const BreedsSelect = ({ breeds, selectedBreed, onSelectChange }) => {
  return (
    <select value={selectedBreed} onChange={onSelectChange}>
      <option value="">選択してください</option>
      {breeds.map(breed => (
        <option key={breed} value={breed}>{breed}</option>
      ))}
    </select>
  );
}

export default BreedsSelect

// selectタグやoptionタグを使ってください