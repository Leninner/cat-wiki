import { CatWikiWelcomeContainer } from './styles';
import CatLG from '../../assets/HeroImagelg.png';
import CatMD from '../../assets/HeroImagemd.png';
import CatSM from '../../assets/HeroImagesm.png';
import CatWikiLogo from '../../assets/CatwikiLogo.svg';

export const CatWikiWelcome = () => {
  return (
    <CatWikiWelcomeContainer>
      <img src={window.innerWidth > 992 ? CatLG : window.innerWidth > 768 ? CatMD : CatSM} alt='' />

      <div>
        <img src={CatWikiLogo} alt='' />
        <p>Get to know more about your cat breed</p>

        <form>
          <input type='text' placeholder='Enter your breed' />
          <span className='material-icons-outlined'>search</span>
        </form>
      </div>
    </CatWikiWelcomeContainer>
  );
};
