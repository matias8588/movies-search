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
import { hero, movies } from '../redux/actions';

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
}));

const Hero = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=0e7564ceeff28c9e5bc077e81ea7fe00&language=en-US&query=${inputValue}&include_adult=false`,
      )
      .then((res) => {
        dispatch(movies.setData(res.data));
        dispatch(hero.displayHero(false));
      });
  };
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleClean = () => {
    setInputValue('');
    dispatch(hero.setHero({}));
    dispatch(hero.displayHero(true));
  };

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
              <Paper component='form' className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder='Search movie'
                  inputProps={{ 'aria-label': 'search movie' }}
                  onChange={handleInput}
                  value={inputValue}
                />
                <IconButton
                  type='submit'
                  className={classes.iconButton}
                  aria-label='search'
                  onClick={handleSearch}
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
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
