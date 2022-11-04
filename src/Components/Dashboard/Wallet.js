import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import React from "react"

import {useState, useEffect} from "react"
import Axios from 'axios'

import AuthService from "../../services/auth.service";

export default function Wallet(props){

  const currentUser = AuthService.getCurrentUser();
  const [fName, setFName] = useState("first Name")
  const [lName, setLName] = useState("last Name")
  const [balance, setBalance] = useState(null)
  const [holdings, setHoldings] = useState(null)


  useEffect( () =>{

    async function getBalance() {
      const res = await Axios.post ("http://localhost:3001/api/stock/wallet-balance",{username : currentUser})
      // console.log(res.data)
      setFName(res.data.fName)
      setLName(res.data.lName)
      setBalance(res.data.balance)
      setHoldings(res.data.holdings)


    }
    getBalance()

  },[])

    return(
        <Card className='px-1 py-3 mt-2 mb-3' style={{borderRadius: "15px", backgroundImage:"url(/dashboard/images/wallet-bg.png)"
          }}> 
          <Container fluid='fluid' className='p-0'>
            <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
            <Col><h5 className='p-0 white'>Wallet</h5></Col>
            <Col className='text-end'><Image width={30} src='/dashboard/images/chip.png'></Image></Col>
            </Row>            
            <Row style={{margin:'auto', width:"100%"}} className='mb-3'>
            <Col><h6 className='p-0 white'>Balance</h6><h6 className='grey'>₹{balance}</h6></Col>
            <Col><h6 className='p-0 white'>Holdings</h6><h6 className='grey'>₹{holdings}</h6></Col>

            </Row>
            <Row style={{margin:'auto', width:"100%"}}>
            <Col className='col-auto'><h6 className='p-0 white'>{fName} &nbsp; {lName}</h6></Col>
            <Col className='text-end'><Image width={30} src='/dashboard/images/logo-s.svg'></Image></Col>
            </Row>

          </Container>
          </Card>
    )
}