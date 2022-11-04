import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import React from "react"

import "./Login.css"

import Axios from 'axios'
import { useState } from 'react';



export default function Register (){

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [alert,setAlert] = useState(false)
    const [response,setResponse] = useState({})


    let handleSubmit =async (e) =>{
        console.log("clicked")
        // e.preventDefault();
        try {
            let res = await Axios.post('http://localhost:3001/api/auth/register',{
                fName, lName, username, email, password
            })
            setAlert(true)
            setResponse(res)
            console.log(res.status)
        } catch (error) {
            setAlert(true)
            console.log(error.response)
            setResponse(error.response)
            
        }


    }


    return(
        <Container fluid='fluid' className='m-0 login-bg px-5 py-4 d-flex align-items-start flex-column' style={{height:"100vh", backgroundImage:`url("/login/images/login-bg.png")` }}>
            <Row className='text-start mb-auto p-2'>
                <Col className='col-auto'><Image height={20}  src='/login/images/logo-blue.svg'></Image>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Image height={20}  src='/logo.svg'></Image></Col>
                <Col className='col-auto mx-3'><a href='/'><h6 className='white'>Dashboard</h6></a></Col>
                <Col className='col-auto mx-3'><a href='/Login'><h6 className='white'>login</h6></a></Col>
            </Row>
<Container className='p-0 m-0' style={{width:"40%"}}>
                    <Row className='text-start mb-3'>
                        <Col>
                        <Row><h6 className='grey'>Start for free</h6> </Row>
                        <Row><h2 className='white'>Create New Account <span style={{height : "50%",fontSize : "2rem"}} className='primary-color'>.</span> </h2></Row>
                        <Row><p className='grey mb-4'>Already a member?&nbsp; <span className='primary-color'><a href='/login'>Login</a></span></p></Row>
                        <Row>  
                            <Alert style={{display : alert ? 'inline' : 'none'}} variant={response.status ? response.status === 201 ? "success" : "danger" : ""}>
                           
      <p className='m-0'>
        {response.data ? response.data.message : ""}
      </p>
    </Alert>
                            <Form>
        <Row className='mt-2'>
        <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='white'>First Name<span className='red'>*</span></Form.Label>
                                            <Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem"}} className='secondary py-3' type="text" placeholder="Enter First Name" name='fName' onChange={(e) => setFName(e.target.value)}/>
                
                                        </Form.Group> 
        </Col>
        <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='white'>Last Name<span className='red'>*</span></Form.Label>
                                            <Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem"}} className='secondary py-3' type="text" placeholder="Enter Last Name" name='lName' onChange={(e) => setLName(e.target.value)}/>
                
                                        </Form.Group> 
        </Col>
        </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label className='white'>Username<span className='red'>*</span></Form.Label>
                                    <Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem"}} className='secondary py-3' placeholder="Enter a unique username" name='username' onChange={(e) => setUsername(e.target.value)}/>
          
                                </Form.Group> 
                                <Form.Group className="mb-3">
                                    <Form.Label className='white'>Email address<span className='red'>*</span></Form.Label>
                                    <Form.Control  style={{border: "none", borderRadius : 15, fontSize: "0.8rem"}} className='secondary py-3' type="email" placeholder="Enter email address" name='email' onChange={(e) => setEmail(e.target.value)}/>
                                </Form.Group>
        
                                <Form.Group className="mb-3">
                                    <Form.Label className='white'>Password<span className='red'>*</span></Form.Label>
                                    <Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem"}} className='secondary py-3 mb-4' type="password" placeholder="Create a new Password" name='password' onChange={(e) => setPassword(e.target.value)}/>
                                </Form.Group>
        <Row>
        <Col>
                                        <Button href='/login' style={{border: "none", borderRadius : 15, fontSize: "0.8rem", }} className='secondary py-3 w-100'>
                                            Login 
                                        </Button>  
        </Col>                      
        <Col>
                                        <Button style={{border: "none", borderRadius : 15, fontSize: "0.8rem", }}  className='primary py-3 w-100' type="button"  onClick={handleSubmit}>
                                            Create Account
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