import react from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
  <Router>
    <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Dashboard" component={Dashboard} />
    </div>
  </Router>
  );
}

export default App;
