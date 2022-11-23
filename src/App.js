import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainProvider } from './context/main';
import './assets/styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GenericPage from './pages/GenericPage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';


function App() {
  return (
    <>
      <HashRouter>
        <MainProvider>
          {/* <Menu /> */}
          <Navbar />

          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/trending' element={<GenericPage />} />
            <Route path='/categories' element={<GenericPage />} />
            <Route path='/popular' element={<GenericPage />} />
            <Route path='/upcoming' element={<GenericPage />} />
            {/* <Route path='/search' >
              <Route path=':slug' element={<GenericPage /> } />
            </Route> */}
            <Route path='/search/name=:searchMovie' element={<GenericPage /> } />
            <Route path='/movie' element={<DetailsPage />} />
            <Route path="*" element={<p>Not found 404</p>} />
          </Routes>

          <Footer />
        </MainProvider>
      </HashRouter>
    </>
  );
}

export default App;
