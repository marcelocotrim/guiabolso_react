import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, withStyles } from 'material-ui';

const styles = theme => ({
  navbar: {
    height: 64
  },
});

class NavBar extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <AppBar className={classes.navbar} position="fixed">
        <Toolbar>
          <img height={44} src="assets/guiabolso.png"/>
        </Toolbar>
      </AppBar>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
