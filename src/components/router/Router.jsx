import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/login/Login.jsx';
import Profile from '../pages/profile/Profile.jsx';
import Home from '../pages/home/Home.jsx'
import Movies from '../pages/movies/Movies.jsx'
const Router = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />

        <Route path="/login" element={<Login/>} />
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route path="*" element={<div>404 Not found</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router
