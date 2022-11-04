import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { useState } from 'react';
import Axios from 'axios'

import "./Login.css"
import AuthService from "../services/auth.service";

import { useNavigate } from 'react-router-dom';


export default function Login (){

    const nav = useNavigate();
    


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [alert,setAlert] = useState(false)
    const [response,setResponse] = useState({})


    let handleSubmit =async (e) =>{
        // console.log("clicked")
        // e.preventDefault();
        try {
            console.log("hey")
            let res = await Axios.post('http://localhost:3001/api/auth/login',{
                    username,  password
            })
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data.username));
              }
            setAlert(true)
            setResponse(res)
            nav("/");
            window.location.reload();
        } catch (error) {
            setAlert(true)
            // console.log(error.response)
            setResponse(error.response)
            
        }


    
    
        }
    return(
        <Container fluid='fluid' className='m-0 login-bg px-5 py-4 d-flex align-items-start flex-column' style={{height:"100vh", backgroundImage:`url("/login/images/login-bg.png")` }}>
            <Row className='text-start mb-auto p-2'>
                <Col className='col-auto'><Image height={20}  src='/login/images/logo-blue.svg'></Image>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Image height={20}  src='/logo.svg'></Image></Col>
                <Col className='col-auto mx-3'><h6 className='white'>Dashboard</h6></Col>
                <Col className='col-auto mx-3'><h6 className='white'>Home</h6></Col>
            </Row>
<Container className='p-0 m-0 mb-5' style={{width:"30%"}}>
                    <Row className='text-start mb-3'>
                        <Col>
                        <Row><h6 className='grey'>Start for free</h6> </Row>
                        <Row><h2 className='white'>Login to Your Account <span style={{height : "50%",fontSize : "2rem"}} className='primary-color'>.</span> </h2></Row>
                        <Row><p className='grey mb-4'>Create New Account&nbsp; <span className='primary-color'><a href='/register'>Register</a></span></p></Row>
                        
                        <Row>  
                        <Alert style={{display : alert ? 'inline' : 'none'}} variant={response.status ? response.status === 201 ? "success" : "danger" : ""}>
                           
                           <p className='m-0'>
                             {response.data ? response.data.message + ' - ' + response.data.error : ""}
                           </p>
                         </Alert>  
                            <Form className='needs-validation'>
                                <Form.Group className="mb-3 ">
                                    <Form.Label className='white'>Username <span className='red'>*</span></Form.Label>
                                    <Form.Control required style={{border: "none", borderRadius : 15, fontSize: "0.8rem"}} className='secondary py-3' placeholder="Enter username"  onChange={(e) => setUsername(e.target.value)}/>
          
                                </Form.Group> 
                                <Form.Group className="mb-3">
                                    <Form.Label className='white'>Email address</Form.Label>
                                    <Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem"}} className='secondary py-3' type="email" placeholder="Enter email address" />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </Form.Group>
        
                                <Form.Group className="mb-3">
                                    <Form.Label className='white'>Password<span className='red'>*</span></Form.Label>
                                    <Form.Control required style={{border: "none", borderRadius : 15, fontSize: "0.8rem"}} className='secondary py-3 mb-4' type="password" placeholder="Create a new Password"  onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
        <Row>
        <Col>
                                        <Button href='/register' style={{border: "none", borderRadius : 15, fontSize: "0.8rem", }} className='secondary py-3 w-100'>
                                            Create Account 
                                        </Button>  
        </Col>                      
        <Col>
                                        <Button style={{border: "none", borderRadius : 15, fontSize: "0.8rem", }}  className='primary py-3 w-100' type="button" onClick={handleSubmit}>
                                            Login
                                        </Button>
        </Col>
        </Row>
                            </Form></Row>
                        </Col>
                    </Row>
</Container>

        </Container>
    )
}