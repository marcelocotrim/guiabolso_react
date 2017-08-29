import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, List, ListItem, ListItemText, Paper, Typography, withStyles } from 'material-ui';
import { lightBlue } from 'material-ui/colors'
import ReactLoading from 'react-loading'
import { fetchCategories } from 'actions';

const styles = theme => ({
  root: {
    backgroundColor: '#f5f5f5',
    minHeight: '75vh',
    marginTop: 64,
    padding: 10,
    textAlign: 'center'
  },
  row: {
    maxWidth: 360,
    margin: '0 auto'
  },
  typography: {
    color: 'black',
    marginBottom: 10
  },
  image: {
    maxWidth: 360,
    width: '50vw',
    marginBottom: 40
  },
  progress: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translateY(-50%, -50%)'
  }
});

class Home extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }
  render() {
    const { categories, isLoading, classes } = this.props;
    return (
      <div className={classes.root} >
        <Grid className={classes.grid} >
          {isLoading &&
            <ReactLoading className={classes.progress} delay={0} type={'spin'} color={lightBlue['500']} height={24} width={24} />
          }
          {!isLoading &&
            <div>
              <img className={classes.image} src="assets/chucknorris_logo_coloured_small@2x.png"/>
              <Typography type="display1" className={classes.typography}>
                Categories List
              </Typography>
              <div className={classes.row}>
                <Paper>
                  <List disablePadding>
                    {
                      categories.map((category, index) =>
                        <div key={category}>
                          <ListItem divider button onClick={(e) => {
                            e.preventDefault();
                            this.props.history.push('/randomjoke/' + category);
                          }} >
                            <ListItemText primary={category} />
                          </ListItem>
                        </div>
                      )
                    }
                  </List>
                </Paper>
              </div>
            </div>
          }
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  fetchCategories: PropTypes.func,
  resetCategoriesPage: PropTypes.func,
  categories: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = ({ categoriesReducer }) => {
  return categoriesReducer
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories());
    }
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home));
