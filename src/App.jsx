import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CardGrid from './Components/CardGrid';
import Footer from './Components/Footer';
import { movies } from './redux/actions';

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
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <CardGrid />
      </main>
      <Footer />
    </>
  );
};
export default App;
