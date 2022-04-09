import { CatBreedContainer } from './styles'
import { CatCompartment } from '../CatCompartment'

export const CatBreedDescription = ({
  name,
  description,
  temperament,
  origin,
  life_span: lifeSpan,
}) => {
  return (
    <CatBreedContainer>
      <h1>{name}</h1>
      <p className='description'>{description}</p>

      <p>
        <span>Temperament:</span> {temperament}
      </p>

      <p>
        <span>Origin:</span> {origin}
      </p>

      <p>
        <span>Life Span:</span> {lifeSpan} years
      </p>

      <section>
        <div className='stuffed'>
          <span>Adaptability:</span>
          <div>
            <CatCompartment stuffed={5} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Affection level:</span>
          <div>
            <CatCompartment stuffed={1} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Child Friendly:</span>
          <div>
            <CatCompartment />
          </div>
        </div>

        <div className='stuffed'>
          <span>Grooming:</span>
          <div>
            <CatCompartment stuffed={3} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Intelligence:</span>
          <div>
            <CatCompartment stuffed={3} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Health issues:</span>
          <div>
            <CatCompartment stuffed={3} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Social needs:</span>
          <div>
            <CatCompartment stuffed={3} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Stranger friendly:</span>
          <div>
            <CatCompartment stuffed={3} />
          </div>
        </div>
      </section>
    </CatBreedContainer>
  )
}
