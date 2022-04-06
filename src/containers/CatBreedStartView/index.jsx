import { CatWikiWelcome } from '../../components/CatWikiWelcome/CatWikiWelcome';
import { MostSearchedBreeds } from './MostSearchedBreeds';

export const CatBreedStartView = () => {
  return (
    <div>
      <CatWikiWelcome />
      <MostSearchedBreeds />
    </div>
  );
};
