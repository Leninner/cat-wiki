import { BreedInfoContainer } from '../containers/BreedInfoContainer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const CatBreedInfoPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }

    return () => {
      console.log('unmount');
    };
  }, []);

  const { catBreed } = state;

  return (
    <div>
      <BreedInfoContainer {...catBreed} />
    </div>
  );
};
