import { Route, Routes } from 'react-router-dom';
import { MovieListComponent } from './components/movie_list';
import { MovieComponent } from './components/movie_component';
import WebSeriesList from './components/web_series_list';

function App() {
  return <Routes>
    <Route path='/' Component={MovieListComponent}>
      <Route path='webseries' Component={WebSeriesList} />
    </Route>
    <Route path='/movie/:id' Component={MovieComponent} >

    </Route>
  </Routes>
}

export default App;
