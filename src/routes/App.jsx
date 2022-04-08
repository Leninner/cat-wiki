import { HashRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Layout } from '../containers/Layout'
import { HomePage } from '../pages/HomePage'
import { CatBreedInfoPage } from '../pages/CatBreedInfoPage'

export const App = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cats/breed/:breed' element={<CatBreedInfoPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
