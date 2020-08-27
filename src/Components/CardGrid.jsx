import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Hero = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=0e7564ceeff28c9e5bc077e81ea7fe00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false',
      )
      .then((res) => {
        setData(res.data.results);
      });
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        {data &&
          data.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <MovieCard data={card} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Hero;
