import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainProvider } from '../hooks/main';
import '../styles/pages/App.css';
import HomePage from './HomePage';

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
