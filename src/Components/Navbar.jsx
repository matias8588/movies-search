import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Movie } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position='relative'>
      <Toolbar onClick={() => history.push('/')}>
        <Movie className={classes.icon} />
        <Typography variant='h6' color='inherit' noWrap>
          Movies search
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
