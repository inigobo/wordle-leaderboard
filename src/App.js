import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import ProfileDetail from './pages/ProfileDetail/ProfileDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/leaderboard" element={<Leaderboard/>}  />
          <Route path="/detail" element={<ProfileDetail/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
