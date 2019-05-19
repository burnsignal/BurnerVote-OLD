import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavBar } from './Components/NavBar.js';
import { Fragment } from 'react'
import {StarField} from './Components/SolarSystem/StarField.js';
import {SolarPanel} from './Components/SolarPanel.js';
import Form from 'react-bootstrap/Form';
import Web3 from 'web3';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
import {  Row, Col } from "react-bootstrap";
import PieChart from 'react-minimal-pie-chart';
=======
import { AbstractMethodFactory } from 'web3-core-method';
>>>>>>> cec0ab6673131699c9041b709b6f366e01ac56d3

var k 
var a
var red 
var blue
var name
var opA
var opB 
var providerone
var web3
var defaultAccount
var proposalissued
var deadline
var moneymap = new Map();
var dataextra
var abione = 
[
  {"constant":false,
  "inputs":
  [
    {"name":"contextName","type":"bytes32"},
    {"name":"nodeAddress","type":"address"}],
    "name":"removeNodeFromContext","outputs":[],
    "payable":false,"stateMutability":"nonpayable","type":"function"},
    {"constant":true,"inputs":[{"name":"userAddress","type":"address"}],
    "name":"isUser","outputs":[{"name":"ret","type":"bool"}],
    "payable":false,"stateMutability":"view","type":"function"},
    {"constant":false,"inputs":[{"name":"contextName","type":"bytes32"},
    {"name":"nodeAddress","type":"address"}],
    "name":"addNodeToContext","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    {"constant":false,"inputs":[{"name":"contextName","type":"bytes32"}],
    "name":"removeContext","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    {"constant":true,"inputs":[{"name":"contextName","type":"bytes32"}],
    "name":"isContext","outputs":[{"name":"ret","type":"bool"}],
    "payable":false,"stateMutability":"view","type":"function"},
    {"constant":true,"inputs":[{"name":"userAddress","type":"address"},
    {"name":"contextName","type":"bytes32"}],"name":"getScore","outputs":[{"name":"","type":"uint32"},
    {"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},
    {"constant":false,"inputs":[{"name":"userAddress","type":"address"},{"name":"contextName","type":"bytes32"},
    {"name":"score","type":"uint32"},{"name":"timestamp","type":"uint64"},
    {"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"}],
    "name":"setScore","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    {"constant":true,"inputs":[{"name":"contextName","type":"bytes32"},{"name":"nodeAddress","type":"address"}],
    "name":"isNodeInContext","outputs":[{"name":"ret","type":"bool"}],
    "payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"contextName","type":"bytes32"}],
    "name":"addContext","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{
      "anonymous":false,"inputs":[{"indexed":false,"name":"userAddress","type":"address"},
      {"indexed":false,"name":"contextName","type":"bytes32"},
      {"indexed":false,"name":"score","type":"uint32"},{
        "indexed":false,"name":"timestamp","type":"uint64"}],"name":"LogSetScore","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"contextName","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"}],"name":"LogAddContext","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"contextName","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"}],"name":"LogRemoveContext","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"contextName","type":"bytes32"},{"indexed":false,"name":"nodeAddress","type":"address"}],"name":"LogAddNodeToContext","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"contextName","type":"bytes32"},{"indexed":false,"name":"nodeAddress","type":"address"}],"name":"LogRemoveNodeFromContext","type":"event"}]
var abi = [
  {
   "constant": false,
   "inputs": [
    {
     "name": "_name",
     "type": "string"
    },
    {
     "name": "_data",
     "type": "string"
    },
    {
     "name": "_deadline",
     "type": "uint64"
    }
   ],
   "name": "newVoteProposal",
   "outputs": [
    {
     "name": "",
     "type": "uint256"
    }
   ],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "inputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "constructor"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": false,
     "name": "proposalID",
     "type": "uint256"
    },
    {
     "indexed": false,
     "name": "issuer",
     "type": "address"
    },
    {
     "indexed": false,
     "name": "deadline",
     "type": "uint256"
    },
    {
     "indexed": false,
     "name": "name",
     "type": "string"
    },
    {
     "indexed": false,
     "name": "data",
     "type": "string"
    }
   ],
   "name": "newProposalIssued",
   "type": "event"
  },
  {
   "constant": true,
   "inputs": [
    {
     "name": "",
     "type": "uint256"
    }
   ],
   "name": "proposals",
   "outputs": [
    {
     "name": "issuer",
     "type": "address"
    },
    {
     "name": "deadline",
     "type": "uint256"
    },
    {
     "name": "name",
     "type": "string"
    },
    {
     "name": "data",
     "type": "string"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  }
 ]
<<<<<<< HEAD

=======
// Implement Quadratic voting in frontend
>>>>>>> cec0ab6673131699c9041b709b6f366e01ac56d3
 let maths_factor = (Vote, choice) => {
  let m1 = 1
  let m2 = 0
  let count = 0
  while(m2 < Vote){
    m2 += m1*m1
    m1++
    count++
  }
  if(choice == "yes"){
    let YesVotes = count
    return YesVotes
  }
  else{
    let NoVotes = count
    return NoVotes
  }
}


<<<<<<< HEAD
// let calcQuadraticVote = (moneymap) => {
//   for (var i = 0, keys = Object.keys(moneymap), ii = keys.length; i < ii; i++) {
//     let Contribution = moneymap[keys[i]]
//     let CalcVote = maths_factor(Contribution,Choice)
//     //console.log('key : ' + keys[i] + ' val : ' + moneymap[keys[i]]);
//   }
// }  
=======
let calcQuadraticVote = (moneymap) => {
  for (var i = 0, keys = Object.keys(moneymap), ii = keys.length; i < ii; i++) {
    let Contribution = moneymap[keys[i]]
    let CalcVote = maths_factor(Contribution)
    //console.log('key : ' + keys[i] + ' val : ' + moneymap[keys[i]]);
  }
}  
>>>>>>> cec0ab6673131699c9041b709b6f366e01ac56d3
// import Formatic from 'formatic';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {value: '',
       data: '',
       address: [],
       money: [],
       submit : false,
       name : '',
       a: 0,
       b: 0
}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.graph = this.graph.bind(this);
    this.checkscore = this.checkscore.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitA = this.handleSubmitA.bind(this)
    this.handleSubmitB = this.handleSubmitB.bind(this)
    
  }


 async componentDidMount(){
    if(typeof window.ethereum === 'undefined'){
      this.graph()
      console.log("wrong")
      return;
    }
    else{
      try{
        const accounts = await window.ethereum.enable()
        console.log(accounts)
        providerone = window.ethereum

        web3 = new Web3(window.ethereum);
        this.graph()
  
      }
      catch(error){
        window.alert(error)
      }
    }
   
  }
   async graph(){

      const query = `{
        anonymousDeposits(first: 5) {
          id
          SenderAddr
          ContriValue
          PropName
        }
        newProposalIssueds(first: 5) {
          id
          issuer
          deadline
          name
          data
          optionBaddr
          optionAaddr
        }
      }`;
      const results = {}
      
   const result = 
   await fetch('https://api.thegraph.com/subgraphs/name/madhur4444/imgovdynamic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    }).then(r => r.json())
      .then(data => data)
      .catch(error => console.log(error))
     
    var keys = Object.values(result)
    var keysmap = Object.values(Object.values(keys[0]))[0][0]   
<<<<<<< HEAD
    console.log(keysmap)
    moneymap.set(keysmap.Contrivalue,keysmap.SenderAddr) //hash map woud take care of uniqueness 
=======
    moneymap.set(keysmap.SenderAddr,keysmap.Contrivalue) //hash map woud take care of uniqueness 
>>>>>>> cec0ab6673131699c9041b709b6f366e01ac56d3

    proposalissued = Object.values(Object.values(keys[0]))[1][0] 
    dataextra = proposalissued.data
    deadline = proposalissued.deadline;
    name = keysmap.PropName;
    opA = proposalissued.optionAaddr
   opB = proposalissued.optionBaddr
   console.log(Object.values(Object.values(keys[0])) )
    console.log(deadline)
    console.log(name)
    console.log(opA)
    console.log(opB)

    console.log(deadline)

    }

    checkscore (){
     

    const myContractone = new web3.eth.Contract(abione, ' 0x876120Bbe3B53E69EA55B18Db0F1dFB2cBeB7693', {  
      defaultAccount: '0x434f5800a864F6A8a03286c028AC60C3228dB54a', // default from address
      defaultGasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });

  console.log(myContractone.address)
    }


  handleChange(event) {
    
    event.preventDefault();
    this.setState({
      value: event.target.value
    })
  }

  handleChangeone(event){
    event.preventDefault()
    this.setState({
      name : event.target.value
    })
  }

  handleChangetwo(event){
    event.preventDefault()
    console.log("hey" + event.target.value)
    this.setState({
      b : event.target.value*1000000000000000000
    })
  }

  handleChangethree(event){
    event.preventDefault()
    console.log("heyasnka" + event.target.value)
    this.setState({
      a : event.target.value*1000000000000000000
    })

  }
  // async threebox(){
  //   const box = await Box.openBox('0x6Cdf5Ee761EdA7A139F3fC5b8cAA138CB76aA462', window.ethereum)
  //   box.onSyncDone(() =>{
  //     console.log('hello')
  //   })


  // }
  async handleSubmit(event){
    this.setState({
      submit : true
    })
    event.preventDefault()
    console.log('hello')
  
    let address = '0xa26575bab179486100e325fc32250cd20a78a28a'
   

    const myContract = new web3.eth.Contract(abi, address, {
      defaultAccount: '0x434f5800a864F6A8a03286c028AC60C3228dB54a', // default from address
      defaultGasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });



  

  console.log(myContract.address)
    let firstAcc
  
  
  
  
  console.log(this.state.value)
  
<<<<<<< HEAD
 var n = this.state.name
 var v = this.state.value
  k = Date.now() + 3600*1000
  myContract.methods.newVoteProposal(n,v,(k)).send({from: '0x6Cdf5Ee761EdA7A139F3fC5b8cAA138CB76aA462'}).then((receipt) =>{
=======
  
 
  myContract.methods.newVoteProposal('abc','hiodhcoishcosdichod',(Date.now() + 3600*1000)).send({from: 'Ee761EdA7A139F3fC5b8cAA138CB76aA4620x6Cdf5'}).then((receipt) =>{
>>>>>>> cec0ab6673131699c9041b709b6f366e01ac56d3
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
    window.alert("Thanks for your submission")
  })
  .catch((error) =>{
    window.alert(error)
  })
        console.log(myContract.address);

   
            
  }

  async handleSubmitA(event){
    event.preventDefault()
    var k = this.state.a
    web3.eth.sendTransaction({
      from: '0x434f5800a864F6A8a03286c028AC60C3228dB54a',
      to: opA,
      value: k
  })
  .then(function(receipt){
     console.log("success")
  });

  }

  async handleSubmitB(event){
    
    event.preventDefault()
    var j = this.state.b
    web3.eth.sendTransaction({
      from: '0x434f5800a864F6A8a03286c028AC60C3228dB54a',
      to: opB,
      value: j
  })
  .then(function(receipt){
   
  });
  


  }
  
  
  

  render(){
    if(this.state.submit){
      console.log(dataextra)
       a = dataextra
      //  setTimeout(() =>{
      //  window.alert('Expired')
      //  },30000)

    }
    return(
      <div className={css(styles.wrapper)}>
      <div>
        <Row>
            <Col xs={6} md={6}>
            <Form>
            <Form.Label style={{fontSize: '20px' ,color:'#ffffff'}}> It Expires on : May 20, 2019 Time</Form.Label>
          
            <br />
            <Form.Label style={{fontSize: '20px' ,color:'#ffffff'}} >Proposal is : {this.state.value}</Form.Label>
            </Form>
            
              <StarField noOfStars='140' />
       
              <SolarPanel />
            </Col>
            <Col xs={6} md={4}  >
            <Row>
            <Form>
            <Form.Label style={{fontSize: '50px' ,color:'#ffffff'}}>Enter the Proposal's Name</Form.Label>

        <Form.Control type="text" onChange= {(e) =>{this.handleChangeone(e)}}/>
        <Form.Label style={{fontSize: '50px' ,color:'#ffffff'}}>Enter Proposal</Form.Label>
      
        <Form.Control as="textarea" rows="3" cols = '6' onChange= {(e) =>{this.handleChange(e)}}/>
  
    
          </Form>
          <br />
          <br />
            </Row>
            <Row>
            <br />
            <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)} >
        Submit  </Button>
    
            </Row>
            <br />
            <br />
            <Row>
            <Col>
              <Form>
              <Form.Label style={{fontSize: '20px' ,color:'#ffffff'}}>Select the the outcome you prefer:</Form.Label>
              </Form>
            </Col>
            <Col>
            <Form>
            <Form.Control type="number" placeholder='ETH' onChange= {(e) =>{this.handleChangethree(e)}}/>
            <Button variant="primary" type="submit" onClick={(e) => this.handleSubmitA(e)} >
            Yes
               </Button>
            </Form>
          
             
              <br />
            </Col>
            <Col>
            <Form>
            <Form.Control type="number" placeholder='ETH' onChange= {(e) =>{this.handleChangetwo(e)}}/>
            <Button variant="primary" type="submit" onClick={(e) => this.handleSubmitB(e)} >
                No
              </Button>
           
            </Form>
         
            </Col>
            <Col>

            <PieChart
        data={[
          { title: 'Yes', value: red, color: '#E38627' },
          { title: 'No', value: blue, color: '#0000FF' },
          
        ]}
      />;
            </Col>
           

           
            </Row>
       
          </Col>
  
          <Col>
           
         
          </Col>
        </Row>
        <Row mr ={6}>
          
         
      
     
    
        </Row>
      </div>
      
    
      <br />
      
      </div>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'visible',
    overflowX: 'hidden',
  },
});

export default App;

