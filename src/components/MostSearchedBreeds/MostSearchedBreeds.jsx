import { MostSearchedBreedsContainer } from './styles'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'

export const MostSearchedBreeds = ({ cats = [], isLoading }) => {
  const array = [1, 2, 3, 4]
  const navigate = useNavigate()

  const getCatBreedPage = (catBreed) => {
    navigate(`/cats/breed/${catBreed.name}`, { state: { catBreed } })
  }

  return (
    <MostSearchedBreedsContainer>
      <div id='most-searched'>
        <h2>Most Searched Breeds</h2>
        <div />
      </div>

      <div id='discovered'>
        <h1>66+ Breeds For you to discover</h1>
        <div>
          SEE MORE{' '}
          <span className='material-icons-outlined'>arrow_right_alt</span>
        </div>
      </div>

      <div id='breeds-container'>
        <div className='box' />
        {isLoading ? (
          <SkeletonTheme
            baseColor='#ccc7c7'
            highlightColor='#7a7a7a'
            borderRadius={24}
          >
            {array.map((value) => {
              return (
                <div key={value}>
                  <Skeleton width={220} height={220} />
                  <p>
                    <Skeleton />
                  </p>
                </div>
              )
            })}
          </SkeletonTheme>
        ) : (
          cats.map((catBreed) => {
            const {
              name,
              id,
              image: { url },
            } = catBreed

            return (
              <div key={id} onClick={() => getCatBreedPage(catBreed)}>
                <img src={url} alt={name} />
                <p>{name}</p>
              </div>
            )
          })
        )}
      </div>
    </MostSearchedBreedsContainer>
  )
}
