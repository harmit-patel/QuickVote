// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationForm from './RegistrationForm';
//import Header from './Header';
import HomePage1 from './HomePage1';
import Features from './Features';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginParticipant from './LoginParticipant';
//mport RegistrationForm from './RegistrationForm';



function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={Header} /> */}
        <Route path="/" exact component={HomePage1} />
        <Route path="/features" component={Features} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/loginparticipant" component={LoginParticipant} />
       {/* /* <Route path="/register" component={RegistrationForm} /> */}
      </Switch>
    </Router>
  );
}

export default App;
