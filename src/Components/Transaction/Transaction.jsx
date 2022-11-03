import Axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function Transaction() {
    return(
        <Container fluid="fluid">
            <h3  className='text-center white mb-5'>Transactions</h3>
            <Row className='row-cols-2 gy-4'>
            <Card  style={{borderRadius: "15px", width :"100%"}} className = 'px-1 py-4 my-2 secondary'>

<Container fluid='fluid' className='p-0'>
<Row  style={{margin:'auto', width:"100%"}}>
    <Table className='white mb-0z' borderless responsive>
<thead>
<tr id="strategy-head">
  <th id="strategy-head">Symbol</th>
  <th id="strategy-head">Strategy Used</th>
  <th id="strategy-head">Trade Time</th>
  <th id="strategy-head">Order ID</th>
  <th id="strategy-head">Trade ID</th>
  <th id="strategy-head">Type</th>
  <th id="strategy-head">Quantity</th>
  <th id="strategy-head">Price</th>

</tr>
</thead>
<tbody>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='red'>SELL</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='red'>SELL</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='red'>SELL</td>
  <td>10</td>
  <td>5000</td>
</tr>
<tr>
  <td>TATA STEEL</td>
  <td>RSI-MACD</td>
  <td>2022-10-10</td>
  <td>124444323233</td>
  <td>76888</td>
  <td className='green'>BUY</td>
  <td>10</td>
  <td>5000</td>
</tr>            
         
            


</tbody>
    </Table>
</Row>

</Container>
</Card>
                
            </Row>
        </Container>

    )
}