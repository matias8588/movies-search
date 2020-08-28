import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core/Container';
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
  const searchData = useSelector((state) => state.hero.data.results);
  const searchValue = useSelector((state) => state.hero.value);
  const display = useSelector((state) => state.hero.display);
  const filterValue = useSelector((state) => state.setFilter.value);

  const filterData = (card) => {
    const duplicatedFilterValue = filterValue * 2;
    if (filterValue > 0 && card.vote_average < duplicatedFilterValue) {
      return (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <MovieCard key={card.id} data={card} />
        </Grid>
      );
    }
    if (filterValue === 0) {
      return (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <MovieCard key={card.id} data={card} />
        </Grid>
      );
    }
    return null;
  };

  const heroDisplay = () => {
    if (display) {
      return data && data.map((card) => filterData(card));
    }
    return (
      searchData &&
      searchData.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <MovieCard key={card.id} data={card} />
        </Grid>
      ))
    );
  };

  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Typography
        component='h3'
        variant='h4'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        {display
          ? 'Discover new movies'
          : `Searching movies with the word: "${searchValue}"`}
      </Typography>
      <Grid container spacing={4}>
        {heroDisplay()}
      </Grid>
    </Container>
  );
};

export default Hero;
