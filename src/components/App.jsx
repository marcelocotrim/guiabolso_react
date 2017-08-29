import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, createPalette } from 'material-ui';
import { lightBlue } from 'material-ui/colors';
import NavBar from 'NavBar';
import ScrollToTop from 'ScrollToTop';
import routes from './../routes';

const theme = createMuiTheme({
  palette: createPalette({
    primary: lightBlue,
  }),
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <NavBar />
            <ScrollToTop>
              <Switch>
                {
                  routes.map((route, index) =>
                    <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
                  )
                }
              </Switch>
            </ScrollToTop>
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
