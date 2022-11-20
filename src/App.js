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
            <Route path='/' element={<HomePage />} />
            <Route path='/trending' element={<GenericPage />} />
            <Route path='/categories' element={<GenericPage />} />
            <Route path='/popular' element={<GenericPage />} />
            <Route path='/upcoming' element={<GenericPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/movie' element={<p>Not found movie 404</p>} >
              <Route path=":slug" element={<DetailsPage />} />
            </Route>
            <Route path="*" element={<p>Not found 404</p>} />
          </Routes>

          <Footer />
        </MainProvider>
      </HashRouter>
    </>
  );
}

export default App;
