import { Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import {FaBars, FaAngleLeft,FaRegBell, FaUserCircle} from "react-icons/fa"
import Logo from "./Logo"
import './Header.css'


import Dashboard from './Dashboard/Dashboard'

export default function Header () {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="container-fluid m-0 p-0 " style={{ display: 'flex' }}>
      <Sidebar  className='d-flex ' style={{height : '100vh', position:'fixed'}} backgroundColor={"rgb(27, 32, 40,1)"}>
<div className='container-fluid d-flex flex-column h-100'>
            <Menu>
              <MenuItem href='/home' disabled={true}><div className="container "><Logo/></div></MenuItem>
               <MenuItem className='white' icon={<FaBars/>}>Dashboard</MenuItem>
              <MenuItem className='white' icon={<FaBars/>}> Charts</MenuItem>
              <MenuItem  className='white'icon={<FaBars/>}> Transaction</MenuItem>
              <MenuItem  className='white' icon={<FaBars/>}> Wallet</MenuItem>
              <MenuItem  className='white' icon={<FaBars/>}> News</MenuItem>
            </Menu>
  
              <Menu className='mb-0 pb-0 mt-auto pt-auto'>            
                <MenuItem  className='white' icon={<FaBars/>}> Settings</MenuItem>
                <MenuItem  className='white' icon={<FaBars/>}> Logout</MenuItem>
              </Menu>
</div>


      </Sidebar>

        <main className='container-fluid p-0 px-3' style={{marginLeft:'250px'}}>
        <Navbar sticky="top" className='w-100 py-3 bg' variant='dark' expand="lg">
        <Container fluid="fluid" className='m-0 d-flex '>
        <Button className='bg-transparent border-0 ' onClick={() => collapseSidebar()}><FaAngleLeft/></Button>
          <Navbar.Brand className='mx-5' href="#home"><h5 className='m-0' >Dashboard</h5></Navbar.Brand>
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
            <Button style={{fontSize:'0.8rem', height:'90%'}} variant="outline-secondary">Search</Button>
          </Form>
            <Nav className='ms-auto'>
              <Nav.Link className='mx-4'><FaRegBell size={20}/></Nav.Link>
              <Nav.Link><div className='row'><FaUserCircle className='col px-1' size={20}/><div className='col px-2'>Login</div></div></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
        <div  className='mt-4 px-4 text-start container-fluid'>
          <Dashboard/>
        </div>
        </main>
</div>

  );
}