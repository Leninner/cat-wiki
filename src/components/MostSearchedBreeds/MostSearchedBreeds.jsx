import { MostSearchedBreedsContainer } from './styles';
import { useQuery } from 'react-query';
import { getCatsInfo } from '../../utils/getCatsInfo';

export const MostSearchedBreeds = () => {
  const array = [1, 2, 3, 4];

  const { data, isLoading } = useQuery('cats', getCatsInfo);

  console.log(data);

  return (
    <MostSearchedBreedsContainer>
      <div id='most-searched'>
        <h2>Most Searched Breeds</h2>
        <div />
      </div>

      <div id='discovered'>
        <h1>66+ Breeds For you to discover</h1>
        <div>
          SEE MORE <span class='material-icons-outlined'>arrow_right_alt</span>
        </div>
      </div>

      <div id='breeds-container'>
        {data.slice(0, 4)?.map(({ name, id, image: { url } }) => (
          <div key={id}>
            <img src={url} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </MostSearchedBreedsContainer>
  );
};
