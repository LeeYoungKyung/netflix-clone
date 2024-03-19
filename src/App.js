import { Route, Routes } from 'react-router-dom';
import './App.css';

// Importing components
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/MovieDetail/MoviePage';
import MovieDetailPage from './pages/Movies/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='movies' element={<MoviePage />} />
        <Route path='movies/:id' element={<MovieDetailPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
