import { BreedInfoContainer } from '../containers/BreedInfoContainer';
import { useLocation } from 'react-router-dom';

export const CatBreedInfoPage = () => {
  const { state } = useLocation();
  const { catBreed } = state;

  return (
    <div>
      <BreedInfoContainer {...catBreed} />
    </div>
  );
};
