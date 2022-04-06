import { MostSearchedBreedsContainer } from './styles';

export const MostSearchedBreeds = ({ cats = [] }) => {
  return (
    <MostSearchedBreedsContainer>
      <div id='most-searched'>
        <h2>Most Searched Breeds</h2>
        <div />
      </div>

      <div id='discovered'>
        <h1>66+ Breeds For you to discover</h1>
        <div>
          SEE MORE <span className='material-icons-outlined'>arrow_right_alt</span>
        </div>
      </div>

      <div id='breeds-container'>
        {cats.map(({ name, id, image: { url } }) => (
          <div key={id}>
            <img src={url} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </MostSearchedBreedsContainer>
  );
};
