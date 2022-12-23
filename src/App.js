import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import HeaderNav from './components/Navbar/Navbar';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import ProfileDetail from './pages/ProfileDetail/ProfileDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContextProvider } from './contexts/GlobalContext';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider>
          <HeaderNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<ProfileDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
