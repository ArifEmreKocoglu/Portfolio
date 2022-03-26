import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Header } from './Components/Header';
import { MainContainer } from './Components/MainContainer';
import { Alert } from './Components/Alert';
import DetailBlog from './Components/DetailBlog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Alert></Alert>
    <Header></Header>
    <Router>
      <Switch>
        <Route exact path="/Dahafazlası" component={ DetailBlog }></Route>
        <Route exact path="/" component={ MainContainer }></Route>
      </Switch>
    </Router>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
