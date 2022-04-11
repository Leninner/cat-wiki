import { FooterContainer } from './styles'
import { CatWikiLogo } from '../CatWikiLogo'

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <CatWikiLogo fill='#FFFFFF' />

        <span>
          created by{' '}
          <strong>
            <a
              href='https://github.com/Leninner'
              rel='noreferrer'
              target='_blank'
            >
              @leninner
            </a>
          </strong>{' '}
          - DevChallenges {new Date().getFullYear()}
        </span>
      </div>
    </FooterContainer>
  )
}
