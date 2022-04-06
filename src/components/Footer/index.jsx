import { FooterContainer } from './styles';
import { CatWikiLogo } from '../CatWikiLogo';

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <CatWikiLogo fill={'#FFFFFF'} />
        <span>
          ©created by <strong>leninner</strong> - DevChallenges {new Date().getFullYear()}
        </span>
      </div>
    </FooterContainer>
  );
};
