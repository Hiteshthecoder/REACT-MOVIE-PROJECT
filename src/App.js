import { Route, Routes } from 'react-router-dom';
import { MovieListComponent } from './components/movie_list';
import { MovieComponent } from './components/movie_component';
import WebSeriesList from './components/web_series_list';
import GqlBasicsComponent from './components/gql_basics_component';

function App() {
  return <Routes>
    <Route path='/' Component={GqlBasicsComponent}>
      <Route path='webseries' Component={WebSeriesList} />
    </Route>
    <Route path='/movie/:id' Component={MovieComponent} >

    </Route>
  </Routes>
}

export default App;
