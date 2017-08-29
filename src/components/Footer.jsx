import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from 'material-ui';

const styles = {
  root: {
    padding: 40,
    backgroundColor: 'black',
    textAlign: 'center'
  },
  typography: {
    color: 'white',
  }
};

class Footer extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <a href="mailto:marcelocotrim.com">
          <Typography component="p" className={classes.typography}>
            {'marcelocotrim@gmail.com'}
          </Typography>
        </a>
        <Typography component="p" className={classes.typography}>
          {'+55 21 99405-3508'}
        </Typography>
        <Typography component="p" className={classes.typography}>
          {'Rio de Janeiro - Brazil'}
        </Typography>
        <a href="https://marcelocotrim.com" target="_blank" rel="noopener noreferrer">
          <Typography component="p" className={classes.typography} style={{marginTop: 20}}>
            {'© 2017 Marcelo Cotrim'}
          </Typography>
        </a>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
