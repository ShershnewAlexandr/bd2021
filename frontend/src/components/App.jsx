import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from "./pages/register/RegisterPage";
import EditPage from "./pages/edit/EditPage";
import AboutPage from "./pages/about/AboutPage";
import { routes } from '../utils/constants';

function App() {
  return (
      <div className="App">
        <Switch>
            <Route path={routes.SIGNIN} component={LoginPage} />
            <Route path={routes.SIGNUP} component={RegisterPage} />
            <Route path={routes.EDIT} component={EditPage} />
            <Route path={routes.ABOUT} component={AboutPage} />
            <Route path="/" render={props => <Redirect to={routes.SIGNIN} />} />
        </Switch>
      </div>
  );
}

export default App;