import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainProvider } from './context/main';
import './assets/styles/App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <HashRouter>
        <MainProvider>
          {/* <Menu /> */}

          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>

        </MainProvider>
      </HashRouter>
    </>
  );
}

export default App;
