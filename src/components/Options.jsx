export const Options = ({ catBreeds, handleClick, searchValue = '' }) => {
  const catBreedsFiltered = catBreeds.filter((catBreed) =>
    catBreed.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div className='options'>
      <div id='some'>
        {catBreedsFiltered.map((catBreed, index) => {
          return (
            <section
              className='catsBreedsNames'
              key={index}
              onClick={() => handleClick(catBreed)}
            >
              {catBreed}
            </section>
          )
        })}
      </div>
    </div>
  )
}
