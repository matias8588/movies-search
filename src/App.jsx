import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { movies } from './redux/actions';
import Main from './Views/Main';
import MovieDetail from './Views/MovieDetail';
import NotFound from './Views/NotFound';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=0e7564ceeff28c9e5bc077e81ea7fe00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false',
      )
      .then((res) => {
        dispatch(movies.setData(res.data));
      });
  }, []);

  return (
    <>
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/movieDetail' component={MovieDetail} />
          <Route exact path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
