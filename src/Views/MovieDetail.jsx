import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  CardContent,
  Button,
  CardMedia,
  Card,
  CardActions,
  Collapse,
  Avatar,
  Typography,
  IconButton,
  CardHeader,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
    marginTop: '5%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MovieDetail = ({ location }) => {
  const data = location.state;
  const history = useHistory();
  const [movieData, setMovieData] = useState();
  console.log(movieData);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${data.id}?api_key=0e7564ceeff28c9e5bc077e81ea7fe00&language=en-US`,
      )
      .then((res) => {
        setMovieData(res.data);
      });
  }, []);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      {movieData && (
        <>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                {movieData.original_language}
              </Avatar>
            }
            title={movieData.title}
            subheader={`Realease date: ${movieData.release_date}`}
          />
          <CardMedia
            className={classes.media}
            image={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            title='Paella dish'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {movieData.tagline}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>Summary:</Typography>
              <Typography>-{movieData.overview}</Typography>
              <Typography paragraph>Genre:</Typography>
              {movieData.genres.map((genre) => {
                return <Typography>-{genre.name}</Typography>;
              })}
              <Typography paragraph>Homepage:</Typography>
              <Typography>-{movieData.homepage}</Typography>
              <Typography paragraph>Rating:</Typography>
              <Typography>-{movieData.vote_average}</Typography>
              <Typography paragraph>Produced by:</Typography>
              {movieData.production_companies.map((company) => {
                return <Typography>-{company.name}</Typography>;
              })}
            </CardContent>
          </Collapse>
        </>
      )}
      <Button onClick={() => history.push('/')}>Back to home</Button>
    </Card>
  );
};
export default MovieDetail;
