import { CatWikiWelcome } from '../../components/CatWikiWelcome/CatWikiWelcome';
import { MostSearchedBreeds } from '../../components/MostSearchedBreeds/MostSearchedBreeds';
import { getCatsInfo } from '../../utils/getCatsInfo';
import { useQuery } from 'react-query';
import { HaveACat } from '../../components/HaveACat';

export const CatBreedStartView = () => {
  const { data, isLoading } = useQuery('cats', getCatsInfo);

  return (
    <>
      <CatWikiWelcome cats={data} />
      <MostSearchedBreeds cats={data?.slice(0, 4)} isLoading={isLoading} />
      <HaveACat />
    </>
  );
};
