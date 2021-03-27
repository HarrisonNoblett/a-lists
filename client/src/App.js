import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashbord';

function App() {
  return (
   <Router>
     <div>
       <Switch>
         <Route exact path='/' component={Landing} />
         <Route exact path='/login' component={Login} />
         <Route exact path='/signup' component={Signup} />
         <Route exact path='/dashboard' component={Dashboard} />
       </Switch>
     </div>
   </Router>
  );
}

export default App;
