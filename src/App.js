import React from 'react';
import { Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import '../src/assets/css/App.css';
import Navbar from './common/layout/navbar-landing';
import Routering from './common/router/router'
import {history} from './common/router/store'
class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL} history={history}>
          <Navbar/>
          <Routering/>
        </Router>
      </div>
    );
  }
  
}
export default App;