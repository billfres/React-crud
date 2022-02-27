import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route exact path="/" component = {ListEmployeeComponent}></Route>
                <Route path = '/employees' component = {ListEmployeeComponent}></Route>
                <Route path = '/add-employee' component = {CreateEmployeeComponent}></Route>
                <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>

              </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}
 
export default App;
