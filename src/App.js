//import logo from './logo.svg';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import ListMovies from './pages/ListMovies';
import Movie from './pages/InfoMovie';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Banner />}></Route>
          <Route path='movies/:type' element= {<ListMovies />}></Route>
          <Route path='movie/:id' element= {<Movie  />}></Route>
          <Route path = '/*' element={<h1>404 Not Fould</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
