import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Movie } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  pointer: {
    cursor: 'pointer',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position='relative' className={classes.pointer}>
      <Toolbar onClick={() => history.push('/')}>
        <Movie className={classes.icon} />
        <Typography variant='h6' color='inherit' noWrap>
          Movies database
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
