import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Divider,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ReactStars from 'react-stars';
import clsx from 'clsx';
import { hero } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  icon: {
    margin: 'auto',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  stars: {
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  display: {
    '& span': {
      cursor: 'not-allowed !important',
      pointerEvents: 'none !important',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState();
  const [disableFilters, setDisableFilters] = useState({
    input: false,
    stars: true,
  });
  const [starsSelected, setStarsSelected] = useState(0);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=0e7564ceeff28c9e5bc077e81ea7fe00&language=en-US&query=${inputValue}&include_adult=false`,
      )
      .then((res) => {
        dispatch(hero.setHero(res.data));
        dispatch(hero.displayHero(false));
      });
  };
  const handleInput = (event) => {
    setInputValue(event.target.value);
    setDisableFilters({ ...disableFilters, stars: false });
  };

  const handleClean = () => {
    setInputValue('');
    dispatch(hero.setHero({}));
    dispatch(hero.displayHero(true));
    setDisableFilters({ ...disableFilters, stars: true });
  };

  const handleCleanStars = () => {
    setDisableFilters({ ...disableFilters, input: false });
    setStarsSelected(0);
  };

  const ratingChanged = (newRating) => {
    setStarsSelected(newRating);
    setDisableFilters({ ...disableFilters, input: true });
  };

  console.log(disableFilters);

  return (
    <div className={classes.heroContent}>
      <Container maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          Search a movie
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Typography
                component='h4'
                variant='h5'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                By name
              </Typography>
              <Paper component='form' className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder='Search movie'
                  inputProps={{ 'aria-label': 'search movie' }}
                  onChange={handleInput}
                  value={inputValue}
                  disabled={disableFilters.input}
                />
                <IconButton
                  type='submit'
                  className={classes.iconButton}
                  aria-label='search'
                  onClick={handleSearch}
                  disabled={disableFilters.input}
                >
                  <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation='vertical' />
                <IconButton
                  color='primary'
                  className={classes.iconButton}
                  aria-label='directions'
                >
                  <CancelIcon onClick={handleClean} />
                </IconButton>
              </Paper>
              <br />
              <Typography
                component='h4'
                variant='h5'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                By rating
              </Typography>
              <Paper component='form' className={classes.root}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2='#ffd700'
                  half={false}
                  className={clsx(
                    classes.stars,
                    !disableFilters.stars && classes.display,
                    '',
                  )}
                  value={starsSelected}
                />

                <Divider className={classes.divider} orientation='vertical' />
                <IconButton
                  color='primary'
                  className={classes.iconButton}
                  aria-label='directions'
                  edit={disableFilters.stars}
                >
                  <CancelIcon onClick={handleCleanStars} />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
