import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import HeaderNav from './components/Navbar/Navbar';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import ProfileDetail from './pages/ProfileDetail/ProfileDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContextProvider, useGlobalContext } from './contexts/GlobalContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  const {globalContext, setGlobalContext} = useGlobalContext();
  const username = localStorage.getItem('username');
  if (username !== null) {
    setGlobalContext({ ...globalContext, currentUser: username, isLoggedIn: true });
  }

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
            <Route path="/register" element={<Register />} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
