import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header"
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login'
import Register from './Components/Register'
// import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="App">

      <Router theme={"dark"}>
        <Routes>
          <Route exact path='/' element={<ProSidebarProvider><Header pageName="Dashboard"/></ProSidebarProvider>}></Route>
          <Route exact path='/login' element={<React.Fragment><Login/></React.Fragment>}></Route>
          <Route exact path='/register' element={<React.Fragment><Register/></React.Fragment>}></Route>
          <Route exact path='/charts' element={<ProSidebarProvider><Header pageName="Charts"/></ProSidebarProvider>}></Route>
          <Route exact path='/transaction' element={<ProSidebarProvider><Header pageName="Transaction"/></ProSidebarProvider>}></Route>
          <Route exact path='/wallet' element={<ProSidebarProvider><Header pageName="Wallet"/></ProSidebarProvider>}></Route>
          <Route exact path='/news' element={<ProSidebarProvider><Header pageName="News"/></ProSidebarProvider>}></Route>
          <Route exact path='/settings' element={<ProSidebarProvider><Header pageName="Settings"/></ProSidebarProvider>}></Route>        
          <Route exact path='/feedback' element={<ProSidebarProvider><Header pageName="Feedback"/></ProSidebarProvider>}></Route>
          <Route exact path='/logout' element={<ProSidebarProvider><Header pageName="Logout"/></ProSidebarProvider>}></Route>
        </Routes>
      </Router>
      


      </div>


  );
}

export default App;
