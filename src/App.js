import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Proyects from './components/proyects/Proyects';
import ProyectState from './context/proyects/proyectState';
import TaskState from './context/tasks/taskState';

function App() {
  return (
    <ProyectState>
      <TaskState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/proyects" component={Proyects}/>
          </Switch>
        </BrowserRouter>
      </TaskState>
    </ProyectState>
  );
}

export default App;
