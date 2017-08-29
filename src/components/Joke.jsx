import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
  withStyles
} from 'material-ui';
import { fetchJoke, resetJokePage } from 'actions'

const styles = theme => ({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '75vh',
    marginTop: 64,
    padding: 10,
    textAlign: 'center'
  },
  card: {
    maxWidth: 400,
    margin: '0 auto'
  },
  avatar: {
    margin: 10,
    width: 40
  },
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
          <CircularProgress size={40}/>
        }
        {joke &&
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
              <Button dense color="primary" href={joke.url} target="_blank">
                Link
              </Button>
            </CardActions>
          </Card>
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
