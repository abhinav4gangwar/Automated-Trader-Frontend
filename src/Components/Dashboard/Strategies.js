import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import React from "react"

export default function Strategies() {
    return ( 
        <Card style={{borderRadius: "15px"}} className = 'px-1 py-4 my-2 secondary'>

            <Container fluid='fluid' className='p-0'>
            <Row style={{margin:'auto', width:"100%"}} className='mb-4'>
            <h5 className=' white'>Strategies</h5>
            </Row> 
            <Row  style={{margin:'auto', width:"100%"}}>
                <Table className='white mb-0z' borderless responsive>
          <thead>
            <tr id="strategy-head">
              <th id="strategy-head">Strategy</th>
              <th id="strategy-head">Amount Invested</th>
              <th id="strategy-head">Current Amount</th>
              <th id="strategy-head">Profit/Loss</th>
              <th id="strategy-head">Starting Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RSI-MACD</td>
              <td>₹5,000</td>
              <td>₹6500</td>
              <td className='green'>+15%</td>
              <td>20/10/2022</td>
            </tr>            
            <tr>
              <td>Bollinger Band</td>
              <td>₹5,000</td>
              <td>₹6500</td>
              <td className='red'>-1%</td>
              <td>20/10/2022</td>
            </tr>            
            <tr>
              <td>Lag RSI Auto</td>
              <td>₹5,000</td>
              <td>₹6500</td>
              <td className='green'>+15%</td>
              <td>20/10/2022</td>
            </tr>            
            <tr>
              <td>RSI-MACD</td>
              <td>₹5,000</td>
              <td>₹6500</td>
              <td className='green'>+15%</td>
              <td>20/10/2022</td>
            </tr>            
            <tr>
              <td>Bollinger Band</td>
              <td>₹5,000</td>
              <td>₹6500</td>
              <td className='red'>-1%</td>
              <td>20/10/2022</td>
            </tr>            
            <tr>
              <td>Lag RSI Auto</td>
              <td>₹5,000</td>
              <td>₹6500</td>
              <td className='green'>+15%</td>
              <td>20/10/2022</td>
            </tr>

          </tbody>
                </Table>
            </Row>

            </Container>
        </Card>
    )
}