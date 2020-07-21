import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Proyects from './components/proyects/Proyects';
import ProyectState from './context/proyects/proyectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertsState';
import AuthState from './context/auth/authState';
import tokenAuth from './config/tokenAuth';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {

  const token = localStorage.getItem('token');

  if(token){
    tokenAuth(token);
  }

  return (
    <ProyectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup}/>
                <PrivateRoute exact path="/proyects" component={Proyects}/>
              </Switch>
            </BrowserRouter>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProyectState>
  );
}

export default App;
