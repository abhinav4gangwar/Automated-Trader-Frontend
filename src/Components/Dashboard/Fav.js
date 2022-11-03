import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from "react"

import {useState, useEffect} from "react"
import Axios from "axios"

import {FaDollarSign} from 'react-icons/fa'

import AuthService from "../../services/auth.service";

function formatData (stkData){
    if (stkData){
      return `${Number(stkData.toFixed(2)).toLocaleString()}`}
  }

export default function Fav() {

    const [favList, setFavList] = useState([])
    


    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();

        const getFav =async () => {
            const res = await Axios.post("http://localhost:3001/api/stock/view-fav",{username: currentUser})
            setFavList(res.data)
        }
        getFav()

    }, []);


    return ( 
        <Card style={{borderRadius: "15px"}} className = 'px-1 py-4 my-2 secondary'>

            <Container fluid='fluid' className='p-0'>
            <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
            <h5 className=' white'>Favourites</h5>
            </Row> 

            {favList.map((fav,i) => {
                return( <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
                        <Col className='col-auto'><Container className='p-0 d-flex justify-content-center align-items-center' fluid={"fluid"} style={{backgroundColor : "#31353F", borderRadius : "10px", height:"85%", width : "3vw"}}><FaDollarSign size={20} style={{color : "#ffc01e"}}/></Container></Col>
                        <Col>
                        <Row><h6 className='white mb-2'>{fav.name.substring(0, 10)}</h6></Row>
                        <Row><h6 className='grey' style={{fontSize : "0.9rem"}}>${fav.ltp}</h6></Row>
                        </Col>                    
                        <Col className='col-auto'>
                        <Row auto className='text-end'><h6 style={{fontSize : "0.9rem"}} className= {fav.changePercent >= 0 ? 'green mb-2' : 'red mb-2'}>{formatData(fav.changePercent)}%</h6></Row>
                        <Row auto className='text-end'> <h7 className='grey' >{formatData(fav.change)}$</h7></Row>
                        </Col>
                    </Row> )
            })}
               


            </Container>
        </Card>
    )
}