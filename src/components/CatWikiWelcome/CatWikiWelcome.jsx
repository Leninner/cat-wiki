import { CatWikiWelcomeContainer, BreedSearcherForm } from './styles'
import CatLG from '../../assets/HeroImagelg.png'
import CatWikiLogo from '../../assets/CatwikiLogo.svg'
import { useState } from 'react'
import { Options } from '../CatBreedOptions/Options'
import { useNavigate } from 'react-router-dom'

export const CatWikiWelcome = ({ cats }) => {
  const [isSearching, setIsSearching] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const catsBreedsNames = cats?.reduce((acc, curr) => {
    acc.push(curr.name)
    return acc
  }, [])

  const handleClick = (catBreed) => {
    setSearchValue(catBreed)
    setIsSearching(false)
    navigate(`/cats/breed/${catBreed}`, {
      state: {
        catBreed: cats.find((cat) => cat.name === catBreed),
      },
    })
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  return (
    <>
      <CatWikiWelcomeContainer>
        <img src={CatLG} alt='' />

        <div>
          <img src={CatWikiLogo} alt='' />
          <p>Get to know more about your cat breed</p>

          <BreedSearcherForm onClick={() => setIsSearching(!isSearching)}>
            <input
              type='text'
              placeholder={
                window.innerWidth > 768 ? 'Enter your breed' : 'Search'
              }
              onChange={handleChange}
              value={searchValue}
            />
            <span className='material-icons-outlined'>search</span>

            {isSearching && catsBreedsNames.length && (
              <Options
                catBreeds={catsBreedsNames}
                handleClick={handleClick}
                searchValue={searchValue}
              />
            )}
          </BreedSearcherForm>
        </div>
      </CatWikiWelcomeContainer>
    </>
  )
}
