/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Typography, Container, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    float: 'right',
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container maxWidth='sm' className={classes.root}>
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Ups...nothing here
      </Typography>
      <Button
        variant='contained'
        className={classes.button}
        color='primary'
        onClick={() => history.push('/')}
      >
        Back to home
      </Button>
    </Container>
  );
};

export default NotFound;
