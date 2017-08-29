import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Hidden, Toolbar, withStyles } from 'material-ui';

const styles = theme => ({
  navbar: {
    height: 64
  },
  image: {
    margin: 10,
  },
  logo: {
    float: 'right'
  }
});

class NavBar extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <AppBar className={classes.navbar} position="fixed">
        <Toolbar>
          <img className={classes.image} height={34} src="/guiabolso_react/assets/logo.png" href="/"/>
          <Hidden mdDown>
            <img className={[classes.image, classes.logo]} height={44} src="/guiabolso_react/assets/guiabolso.png"/>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
