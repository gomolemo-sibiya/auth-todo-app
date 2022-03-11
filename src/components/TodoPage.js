import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import TodoForm from '../components/TodoForm';
import '../todostyle.css';
import firebaseConfig from '../config.js';
import { Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const useStyles = makeStyles(theme => ({
  root: {},
  paperLeft: {
    height: 600,
    borderRadius: 0,
    padding: 0,
    background: '#D9D9D9'
  },
  paperMiddle: {
    height: 600,
    borderRadius: 0,
    padding: 0,
    background: '#D9D9D9',
    overflow: 'scroll'
  },
  paperRight: {
    height: 600,
    borderRadius: 0,
    paddingRight: 20,
    paddingLeft: 20,
    background: '#D9D9D9'
  }
}));

function TodoPage() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const classes = useStyles();
  return (
    <div>
      <div className="center">
        <Grid container>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paperLeft} elevation={0}>
              <div className="cover">
                <form method="get" action="">
                  <div className="tb">
                    <div className="td">
                      <input
                        className="searchButton"
                        type="text"
                        placeholder="Search"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <List className={classes.listTypography}>
                <ListItem>
                  <ListItemIcon>
                    <WbSunnyOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Day" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StarBorderOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Important" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CalendarTodayOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Planned" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PersonOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Assigned to you" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tasks" />
                </ListItem>
              </List>
              <button
                onClick={() => firebaseConfig.auth().signOut()}
                className="btnLogin"
              >
                Sign out
              </button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper className={classes.paperMiddle} elevation={0}>
              <Paper
                className="backgroundImage"
                elevation={0}
                style={{ height: 600 }}
              >
                <TodoForm />
              </Paper>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className={classes.paperLeft} elevation={0}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Star" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AddOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Important" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotificationsNoneOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Remind Me" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DateRangeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Due Date" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RepeatOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Repeat" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AssignmentOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add File" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TodoPage;
