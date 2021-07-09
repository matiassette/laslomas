// import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar'
import Login from './Components/Paginas/Login'
import Registro from './Components/Paginas/Registro'


function App() {
      return(
        <div className="App">
          <Router>
            <Navbar/>
            <Switch>
              <Route path='/' exact component ={Login}/>
              <Route path='/Registro' exact component ={Registro}/>
            </Switch>
            <Registro/> 
            <Navbar/>
          </Router>
        </div>
      );
}

export default App;