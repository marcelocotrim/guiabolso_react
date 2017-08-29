import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, createPalette } from 'material-ui';
import { lightBlue } from 'material-ui/colors';
import NavBar from 'NavBar';
import Footer from 'Footer';
import ScrollToTop from 'ScrollToTop';
import routes from './../routes';

const theme = createMuiTheme({
  palette: createPalette({
    primary: lightBlue,
  }),
  progress: {
    position: 'absolute',
    left: '50vw',
    top: '50vh',
  },
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
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
