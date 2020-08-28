import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(6),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Matías Cejas
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      >
        <a href='http://matiascejas.com.ar/'>
          Visit my website{' '}
          <span role='img' aria-label='emoji'>
            {' '}
            🙂
          </span>
        </a>
      </Typography>
    </footer>
  );
};

export default Navbar;
