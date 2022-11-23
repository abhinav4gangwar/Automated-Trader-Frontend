import { Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import React from "react"

import {FaBars, FaAngleLeft,FaRegBell, FaUserCircle} from "react-icons/fa"
import Logo from "./Logo"
import './Header.css'
import {useState, useEffect} from "react";
import Axios from 'axios'



import Dashboard from './Dashboard/Dashboard'
import News from './News/News'
import Settings from './Settings/Settings'
import Feedback from './Feedback'
import Transaction from './Transaction/Transaction'
import Wallet from './Wallet/WalletPage'
import Charts from './Charts/Charts'

import AuthService from "../services/auth.service";




export default function Header (props) {



  // useEffect( () => {

  //   async function fetchUser () { 
  //   let user = JSON.parse(sessionStorage.getItem('data'));
  //   const token = user.data.id;
  //   const res = await Axios.get('http://localhost:3001/', { headers: {"Authorization" : `Bearer ${token}`} })
  //   // console.log(res)
  //   // var user = res.user
  //   // console.log(user)
  //   }

  //   fetchUser()
  // }, []);

  // console.log(props.username)

  const currentUser = AuthService.getCurrentUser();



  const [sidebarMargin, setSidebarMargin] = useState("250px")
  const { collapseSidebar } = useProSidebar();

 
  var pageName = props.pageName
  
  return (
    <div className="container-fluid m-0 p-0 " style={{ display: 'flex' }}>
      <Sidebar  className='d-flex ' style={{height : '100vh', position:'fixed'}} backgroundColor={"rgb(27, 32, 40,1)"}>
<div className='container-fluid d-flex flex-column h-100'>
            <Menu>
              <MenuItem href='/' disabled={true}><div className="container "><Logo/></div></MenuItem>
               <MenuItem href='/' className={pageName==="Dashboard"  ? "white primary" : "white" } icon={<FaBars/>}>Dashboard</MenuItem>
              <MenuItem href='/charts' className={pageName==="Charts" ? "white primary" : "white" } icon={<FaBars/>}> Charts</MenuItem>
              <MenuItem href='/transaction'  className={pageName==="Transaction" ? "white primary" : "white" }icon={<FaBars/>}> Transaction</MenuItem>
              <MenuItem href='/wallet' className={pageName==="Wallet" ? "white primary" : "white" } icon={<FaBars/>}> Wallet</MenuItem>
              <MenuItem href='/news'  className={pageName==="News" ? "white primary" : "white" } icon={<FaBars/>}> News</MenuItem>
            </Menu>
  
              <Menu className='mb-0 pb-0 mt-auto pt-auto'>            
                <MenuItem href='/feedback' className={pageName==="Feedback" ? "white primary" : "white" } icon={<FaBars/>}>Feedback</MenuItem>                
                <MenuItem href='/settings' className={pageName==="Settings" ? "white primary" : "white" } icon={<FaBars/>}> Settings</MenuItem>
                <MenuItem href='/logout' className={pageName==="Logout" ? "white primary" : "white" } icon={<FaBars/>}> Logout</MenuItem>
              </Menu>
</div>


      </Sidebar>

        <main className='container-fluid p-0 px-3' style={{marginLeft: sidebarMargin}}>
        <Navbar sticky="top" className='w-100 py-3 bg' variant='dark' expand="lg">
        <Container fluid="fluid" className='m-0 d-flex '>
        <Button className='bg-transparent border-0 ' onClick={() => { sidebarMargin === '250px' ?  setSidebarMargin('75px') : setSidebarMargin('250px')
                                                                   collapseSidebar()}}><FaAngleLeft/></Button>
          <Navbar.Brand className='mx-5' href="#home"><h5 className='m-0' >{pageName}</h5></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ms-auto">
            <Form className="d-flex mx-5" style={{}}>
            <Form.Control
            style={{fontSize:'0.8rem', height:'90%', width:'20vw'}}
              type="search"
              placeholder="Search Stock/Strategies/Currency"
              className="secondary me-2 border-0"
              aria-label="Search"
              
            />
            <Button style={{fontSize:'0.8rem', height:'90%'}} variant="outline-secondary" href='/charts'>Search</Button>
          </Form>
            <Nav className='ms-auto' >
              <Nav.Link href='/login' className='mx-4'><FaRegBell size={20}/></Nav.Link>
              <Nav.Link href={currentUser ? '/settings' : '/login'}><div className='row'><FaUserCircle className='col px-1' size={20}/><div className='col px-2'>{currentUser ? currentUser : 'login'}</div></div></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
        <div  className='mt-4 px-2 text-start container-fluid'>


        {pageComponent(pageName)}
        {/* <Dashboard/> */}
        </div>
        </main>
</div>

  );
}

function logout(){
  
}

function pageComponent (name){

  switch (name){
    case "Dashboard":
       return <Dashboard/>
    case "News":
       return <News/>
       
    case "Charts":
       return <Charts />
      
    case "Transaction":
       return <Transaction/>
      
    case "Wallet":
       return <Wallet/>
      
    case "Settings":
       return <Settings/>    
    
    case "Feedback":
       return <Feedback/>
      
    case "Logout":
       AuthService.logout()
       return <Dashboard/>

    
  }

}