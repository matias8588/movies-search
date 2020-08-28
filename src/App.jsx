import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { movies } from './redux/actions';
import Main from './Views/Main';
import MovieDetail from './Views/MovieDetail';
import NotFound from './Views/NotFound';
import theme from './assets/theme';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
      )
      .then((res) => {
        dispatch(movies.setData(res.data));
      });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};
export default App;
