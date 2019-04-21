import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Landing from './views/Landing/Landing';
import GenerateBill from './views/GenerateBill/GenerateBill';
import Navbar from './components/Navbar'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routes = (
  <Fragment>
    <Router>
    <Navbar />
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/lol" component={GenerateBill} />
      </div>
    </Router>
  </Fragment>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
