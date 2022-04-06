import { CatWikiWelcome } from '../../components/CatWikiWelcome/CatWikiWelcome';
import { MostSearchedBreeds } from '../../components/MostSearchedBreeds/MostSearchedBreeds';
import { getCatsInfo } from '../../utils/getCatsInfo';
import { useQuery } from 'react-query';

export const CatBreedStartView = () => {
  const { data, isLoading } = useQuery('cats', getCatsInfo);

  console.log(data);

  return (
    <>
      <CatWikiWelcome cats={data} />
      <MostSearchedBreeds cats={data?.slice(0, 4)} />
    </>
  );
};
