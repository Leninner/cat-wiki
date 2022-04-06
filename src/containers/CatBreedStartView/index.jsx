import { CatWikiWelcome } from '../../components/CatWikiWelcome/CatWikiWelcome';
import { MostSearchedBreeds } from '../../components/MostSearchedBreeds/MostSearchedBreeds';

export const CatBreedStartView = () => {
  return (
    <div>
      <CatWikiWelcome />
      <MostSearchedBreeds />
    </div>
  );
};
