import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
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
  const data = useSelector((state) => state.data.results);

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
