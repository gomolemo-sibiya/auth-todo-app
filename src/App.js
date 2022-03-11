import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import TodoPage from './components/TodoPage';
import { AuthProvider } from './components/Auth';
import './style.css';

export default function App() {
  return (
    <div>
      <style>{'body { background-color: #E9E9E9; }'}</style>
      <AuthProvider>
        <Router>
          {/*This is a comment*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/todopage" component={TodoPage} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}
