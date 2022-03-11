import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebaseConfig from '../config';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco';
import '../style.css';

const useStyles = makeStyles(theme => ({
  root: {},
  paperLeft: {
    height: 600,
    borderRadius: 0,
    padding: 0
  },
  paperRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 600,
    borderRadius: 0,
    paddingRight: 120,
    paddingLeft: 120
  }
}));

const SignUp = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };

  //Change Here
  if (currentUser) {
    return <Redirect to="/todopage" />;
  }

  return (
    <div className={classes.root}>
      <style>{'body { background-color: #E9E9E9; }'}</style>
      <div className="center">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paperLeft} elevation={0}>
              <Paper className="bigImage" elevation={0}>
                <Paper className="bigImageText" elevation={0}>
                  <p style={{ color: 'white' }}>
                    Time
                    <EcoIcon style={{ fontSize: 40 }} />
                    Planner
                  </p>
                </Paper>
              </Paper>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper className={classes.paperRight} elevation={0}>
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <h1>Sign Up</h1>

                  <div className="login-form">
                    <input
                      className="formInput"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                    <input
                      className="formInput"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <button className="btnSignup" type="submit">
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignUp;
