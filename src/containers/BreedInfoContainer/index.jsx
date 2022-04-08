import { ImgContainer } from './styles'

export const BreedInfoContainer = ({ image: { url }, name }) => {
  return (
    <div>
      <ImgContainer>
        <img src={url} alt={name} />
        <div />
      </ImgContainer>
    </div>
  )
}
