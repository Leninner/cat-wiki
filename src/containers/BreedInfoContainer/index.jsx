import { ImgContainer, StyledBreedInfoContainer } from './styles'
import { CatBreedDescription } from '../../components/CatBreedDescription'

export const BreedInfoContainer = (props) => {
  const {
    image: { url },
    name,
  } = props

  return (
    <StyledBreedInfoContainer>
      <ImgContainer>
        <img src={url} alt={name} />
        <div />
      </ImgContainer>

      <CatBreedDescription {...props} />
    </StyledBreedInfoContainer>
  )
}
