import { CatWikiWelcomeContainer } from './styles';
import CatLG from '../../assets/HeroImagelg.png';
import CatMD from '../../assets/HeroImagemd.png';
import CatSM from '../../assets/HeroImagesm.png';
import CatWikiLogo from '../../assets/CatwikiLogo.svg';
import { useState } from 'react';

export const CatWikiWelcome = ({ cats }) => {
  const [isSearching, setIsSearching] = useState(false);

  const catsBreedsNames = cats?.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);

  return (
    <CatWikiWelcomeContainer>
      <img src={window.innerWidth > 992 ? CatLG : window.innerWidth > 768 ? CatMD : CatSM} alt='' />

      <div>
        <img src={CatWikiLogo} alt='' />
        <p>Get to know more about your cat breed</p>

        <form onClick={() => setIsSearching(!isSearching)}>
          <input type='text' placeholder='Enter your breed' />
          <span className='material-icons-outlined'>search</span>

          {isSearching && <div className='options'>leninner</div>}
        </form>
      </div>
    </CatWikiWelcomeContainer>
  );
};
