// Componente da barra de navegação superior

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { AppBar, Avatar, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, ListSubheader, Toolbar, withStyles } from 'material-ui';
import { Email, Menu, Phone, Web } from 'material-ui-icons';

const styles = theme => ({
  navbar: {
    color: 'white',
    height: 64
  },
});

class NavBar extends Component {
  state = {
    isOpen: false
  };
  toggleDrawer = (isOpen) => {
    this.setState({
      isOpen: isOpen
    });
  };
  handleOpen = () => this.toggleDrawer(true);
  handleClose = () => this.toggleDrawer(false);
  renderMenu() {
    return (
      <div>
        <ListItem divider>
          <Avatar src="assets/marcelocotrim.jpg" />
          <ListItemText primary="Marcelo Cotrim" />
        </ListItem>
        <ListItem button divider onClick={(e) => {
          window.open('https://marcelocotrim.com');
        }} >
          <ListItemIcon>
            <Web />
          </ListItemIcon>
          <ListItemText primary="Website" />
        </ListItem>
        <ListItem button divider onClick={(e) => {
          location.href = 'mailto:marcelocotrim@gmail.com';
        }} >
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText primary="E-mail" />
        </ListItem>
        <ListItem button divider onClick={(e) => {
          location.href = 'tel:+5521994053508';
        }} >
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText primary="21 99405-3508" />
        </ListItem>
        <ListSubheader>{'© Copyright 2017'}</ListSubheader>
      </div>
    );
  }
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <AppBar className={classes.navbar} position="fixed" color="primary">
          <Toolbar>
            <IconButton aria-label="Menu" onClick={this.handleOpen}>
              <Menu color="#fff"/>
            </IconButton>
            <img height={44} src="assets/guiabolso.png"/>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.isOpen}
          onRequestClose={this.handleClose}
          onClick={this.handleClose}
        >
          {this.renderMenu()}
        </Drawer>
      </div>

    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(NavBar));
