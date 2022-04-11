import { CatBreedOptionsContainer } from './styles'

export const Options = ({ catBreeds, handleClick, searchValue = '' }) => {
  const catBreedsFiltered = catBreeds.filter((catBreed) =>
    catBreed.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <CatBreedOptionsContainer>
      <div>
        {catBreedsFiltered.map((catBreed, index) => {
          return (
            <section key={index} onClick={() => handleClick(catBreed)}>
              {catBreed}
            </section>
          )
        })}
      </div>
    </CatBreedOptionsContainer>
  )
}
