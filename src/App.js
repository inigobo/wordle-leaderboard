import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HeaderNav from './components/Navbar/Navbar';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import ProfileDetail from './pages/ProfileDetail/ProfileDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContextProvider } from './contexts/GlobalContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  const username = localStorage.getItem('username');
  console.log('local usrn', username);
  const avatarSeed = localStorage.getItem('avatarSeed');
  console.log('local avat', avatarSeed);

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider initialValue={{
          currentUser: username !== null ? username : '',
          isLoggedIn: username !== null ? true : false,
          selectedUser: username,
          avatarSeed: avatarSeed,
        }}>
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
