import { HaveACatContainer, Information, Masonry } from './styles'
import secondCat from '../../assets/image 1.png'
import firstCat from '../../assets/image 2.png'
import thirdCat from '../../assets/image 3.png'

export const HaveACat = () => {
  return (
    <HaveACatContainer>
      <Information>
        <div />
        <h1>Why should you have a cat?</h1>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>

        <section>
          READ MORE{' '}
          <span className='material-icons-outlined'>arrow_right_alt</span>
        </section>
      </Information>

      <Masonry>
        <div>
          <img src={firstCat} alt='' id='firstImg' />
          <img src={secondCat} alt='' id='secondImg' />
        </div>

        <img src={thirdCat} alt='' id='thirdImg' />
      </Masonry>
    </HaveACatContainer>
  )
}
