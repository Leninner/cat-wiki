import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Layout } from '../containers/Layout';
import { HomePage } from '../pages/HomePage';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
