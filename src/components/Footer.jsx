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
        <Typography component="p" className={classes.typography}>
          {'© 2017 Marcelo Cotrim'}
        </Typography>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
