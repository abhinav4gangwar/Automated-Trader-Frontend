import Axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import AuthService from "../../services/auth.service";


export default function Transaction() {

  const [transactions,setTransactions] = useState({})


  useEffect( ()=> {
    
    const currentUser = AuthService.getCurrentUser();
    const getData = async ()=>{
      const res = await Axios.post("http://localhost:3001/api/stock/get-transactions",{username : currentUser})
      setTransactions(res.data)
      console.log(res.data)
    }
    
    getData()
    
  },[])



    return(
        <Container fluid="fluid">
            <h3  className='text-center white mb-5'>Transactions</h3>
            <Row className='row-cols-2 gy-4'>
            <Card  style={{borderRadius: "15px", width :"100%"}} className = 'px-1 py-4 my-2 secondary'>

<Container fluid='fluid' className='p-0'>
<Row  style={{margin:'auto', width:"100%"}}>
    <Table className='white mb-0' borderless responsive>
<thead>
<tr id="strategy-head">
  <th id="strategy-head">Symbol</th>
  <th id="strategy-head">Name</th>
  <th id="strategy-head">Order Date</th>
  <th id="strategy-head">Stock Timestamp</th>
  <th id="strategy-head">Type</th>
  <th id="strategy-head">Price</th>
  <th id="strategy-head">Quantity</th>
  <th id="strategy-head">Final Price</th>

</tr>
</thead>
<tbody>
    {transactions.length > 0 ? (transactions.map((item, i) =>(
    <tr key={i}>
      <td>{item.symbol}</td>
      <td>{item.name}</td>
      <td>{item.order_date}</td>
      <td>{item.stock_date}</td>
      <td className={item.type === "buy" ? 'green' : "red"}>{item.type}</td>
      <td>{item.price_INR}</td>
      <td>{item.quantity}</td>
      <td>{item.final_price}</td>
    </tr>
    ))) : <></>}



</tbody>
    </Table>
</Row>

</Container>
</Card>
                
            </Row>
        </Container>

    )
}