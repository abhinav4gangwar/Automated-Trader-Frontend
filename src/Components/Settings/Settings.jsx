import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import React from "react"

import Axios from "axios"
import AuthService from "../../services/auth.service";

import {useState, useEffect} from 'react'

export default function Settings() {

    const [response,setResponse] = useState({})

    const [user,setUser] = useState({})
    const [fName,setFName] = useState(user.fName)
    const [lName,setLName] = useState(user.lName)
    const [email,setEmail] = useState(user.email)


    // console.log(fName, lName, email)
    useEffect(() => {
        
        async function fetchUser () {
            const res = await Axios.post('http://localhost:3001/api/auth/user', {
                username : AuthService.getCurrentUser()
            })

            // console.log(res.data)
            setUser(res.data)
            setFName(res.data.fName)
            setLName(res.data.lName)
            setEmail(res.data.email)

            // console.log(fName, lName, email)
        }
        fetchUser()
        console.log()

    }, []);

    let handleClear = async (e) => {
        window.location.reload(true);
    }

    let handleSubmit =async (e) =>{
        // console.log("clicked")
        // e.preventDefault();

            const obj  = {
                username : user.username, fName : fName, lName : lName, email:email
            }

            console.log(obj)
    
    
            let res = await Axios.post('http://localhost:3001/api/auth/update',obj)
            setResponse(res)
            console.log(response)
            
            window.location.reload(true);

        }




    return(
        <Container fluid="fluid">
            <h3  className='text-center white mb-4'>Account Settings</h3>
<Row className='row-cols-2 m-3 gy-4 justify-content-center'>
                <Alert  style={{display : alert ? 'inline' : 'none', borderRadius: "10px", width :"47%"}} variant={response.status ? response.status === 201 ? "success" : "danger" : ""}>
                               
                               <p className='m-0'>
                                 {response.data ? response.data.message + ' - ' + response.data.error : ""}
                               </p>
                </Alert> 
</Row>
            <Row className='row-cols-2 gy-4 justify-content-center'>


            <Card  style={{borderRadius: "15px", width :"45%"}} className = 'px-0 py-4 my-2 secondary  '>

<Container fluid='fluid' className='p-0 text-center'>
<Row className='justify-content-center' style={{margin:'auto', width:"100%"}}>
{/* <Row className='justify-content-center'>        <Image className=' rounded-circle mb-4' src='pp.jpg' style={{width: "200px", height:"180px"}}></Image></Row> */}
<Row className='justify-content-center'>
            <Form className='text-start w-75'>
                                    <Form.Group className="mb-3">
                                        <Row className='align-items-center'>
                                            <Col md={4}><Form.Label className='white'>First Name</Form.Label></Col>
                                            <Col className='me-0'><Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem",width:"75%"}} className='bg py-3 ms-auto text-center' placeholder={user.fName} onChange={(e) => setFName(e.target.value)}/></Col>
                                        </Row>
                                    </Form.Group> 
                                    <Form.Group className="mb-3">
                                        <Row className='align-items-center'>
                                            <Col md={4}><Form.Label className='white'>Last Name</Form.Label></Col>
                                            <Col className='me-0'><Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem",width:"75%"}} className='bg py-3 ms-auto text-center' placeholder={user.lName} onChange={(e) => setLName(e.target.value)}/></Col>
                                        </Row>
                                    </Form.Group> 
                                    <Form.Group className="mb-3">
                                        <Row className='align-items-center'>
                                            <Col md={4}><Form.Label className='white'>Email </Form.Label></Col>
                                            <Col className='me-0'><Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem",width:"75%"}} className='bg py-3 ms-auto text-center' placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/></Col>
                                        </Row>
                                    </Form.Group> 
                                    <Form.Group className="mb-3">
                                        <Row className='align-items-center'>
                                            <Col md={4}><Form.Label className='white'>Username</Form.Label></Col>
                                            <Col className='me-0'><Form.Control disabled style={{border: "none", borderRadius : 15, fontSize: "0.8rem",width:"75%"}} className='bg py-3 ms-auto text-center' placeholder={user.username} /></Col>
                                        </Row>
                                    </Form.Group> 
                                    <Form.Group className="mb-3">
                                        <Row className='align-items-center'>
                                            <Col md={4}><Form.Label className='white'>Mobile Number</Form.Label></Col>
                                            <Col className='me-0'><Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem",width:"75%"}} className='bg py-3 ms-auto text-center' placeholder="98986969698" /></Col>
                                        </Row>
                                    </Form.Group> 
                                    <Form.Group className="mb-3">
                                        <Row className='align-items-center'>
                                            <Col md={4}><Form.Label className='white'>Password</Form.Label></Col>
                                            <Col className='me-0'><Form.Control style={{border: "none", borderRadius : 15, fontSize: "0.8rem",width:"75%"}} className='bg py-3 ms-auto text-center' placeholder="*********" /></Col>
                                        </Row>
                                    </Form.Group> 
            <Row className = 'mt-5'>
            <Col>
                                            <Button style={{border: "none", borderRadius : 15, fontSize: "0.8rem", }} className='bg py-3 w-100' type="button" onClick={handleClear}>
                                                Cancel
                                            </Button>  
            </Col>                      
            <Col>
                                            <Button style={{border: "none", borderRadius : 15, fontSize: "0.8rem", }}  className='primary py-3 w-100' type="button" onClick={handleSubmit}> 
                                                Save Changes
                                            </Button>
            </Col>
            </Row>
                                </Form>
</Row>
        
</Row>

</Container>
</Card>
            
                
            </Row>
        </Container>

    )
}