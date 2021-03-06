/* eslint-disable react/prop-types */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 540,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const MovieCard = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card
      className={classes.card}
      boxShadow={3}
      onClick={() => history.push('/movieDetail', data)}
    >
      <CardMedia
        className={classes.cardMedia}
        image={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        title={data.title}
      />
    </Card>
  );
};

export default MovieCard;
