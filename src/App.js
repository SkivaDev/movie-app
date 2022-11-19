import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainProvider } from './context/main';
import './assets/styles/App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <MainProvider>
          {/* <Menu /> */}
          <Navbar />

          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>

          <Footer />
        </MainProvider>
      </HashRouter>
    </>
  );
}

export default App;
