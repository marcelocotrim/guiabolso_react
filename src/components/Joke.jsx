// Componente da Joke com o detalhe de uma joke aleatória

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  withStyles
} from 'material-ui';
import { lightBlue } from 'material-ui/colors'
import ReactLoading from 'react-loading'
import { fetchJoke, resetJokePage } from 'actions'

const styles = theme => ({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    marginTop: 64,
    padding: 10,
    textAlign: 'center'
  },
  image: {
    maxWidth: 360,
    width: '50vw',
    marginBottom: 40
  },
  card: {
    maxWidth: 400,
    margin: '0 auto'
  },
  avatar: {
    margin: 10,
    width: 40
  },
  progress: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translateY(-50%, -50%)'
  }
});

class Joke extends Component {
  componentWillMount() {
    this.props.fetchJoke(this.props.match.params.category)
  }
  componentWillUnmount() {
    this.props.resetJokePage()
  }
  render() {
    const { joke, isLoading, classes } = this.props;
    return (
      <div className={classes.root}>
        {isLoading &&
          <ReactLoading className={classes.progress} delay={0} type={'spin'} color={lightBlue['500']} height={24} width={24} />
        }
        {!isLoading && joke &&
          <div>
            <img className={classes.image} src="assets/chucknorris_logo_coloured_small@2x.png"/>
            <Card className={classes.card}>
              <img className={classes.avatar} src={joke.icon_url} />
              <CardContent>
                <Typography component="p">
                  {joke.value}
                </Typography>
              </CardContent>
              <CardActions>
                <Button dense color="primary" onClick={(e) => {
                  e.preventDefault()
                  this.props.history.push('/')
                }} >
                  Back
                </Button>
                <Button dense color="primary" href={joke.url} target="_blank" rel="noopener noreferrer">
                  Link
                </Button>
              </CardActions>
            </Card>
          </div>
        }
      </div>
    )
  }
}

Joke.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object,
  history: PropTypes.object,
  fetchJoke: PropTypes.func,
  resetJokePage: PropTypes.func,
  joke: PropTypes.object,
  isLoading: PropTypes.bool
};

const mapStateToProps = ({ jokeReducer }) => {
  return jokeReducer
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJoke: (category) => {
      dispatch(fetchJoke(category));
    },
    resetJokePage: () => {
      dispatch(resetJokePage());
    }
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Joke));
