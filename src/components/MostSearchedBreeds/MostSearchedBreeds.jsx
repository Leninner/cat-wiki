import { MostSearchedBreedsContainer } from './styles';

export const MostSearchedBreeds = () => {
  const array = [1, 2, 3, 4];

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

      <div>
        {array.map((item) => (
          <div>
            <img src='' alt='some' />
            <span>Bengal</span>
          </div>
        ))}
      </div>
    </MostSearchedBreedsContainer>
  );
};
