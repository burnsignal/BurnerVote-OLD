import React, { Component } from 'react'

import Form from 'react-bootstrap/Form';
import Web3 from 'web3';
import Button from 'react-bootstrap/Button';
import { AbstractMethodFactory } from 'web3-core-method';

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
// Implement Quadratic voting in frontend
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


let calcQuadraticVote = (moneymap) => {
  for (var i = 0, keys = Object.keys(moneymap), ii = keys.length; i < ii; i++) {
    let Contribution = moneymap[keys[i]]
    let CalcVote = maths_factor(Contribution)
    //console.log('key : ' + keys[i] + ' val : ' + moneymap[keys[i]]);
  }
}  
// import Formatic from 'formatic';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {value: '',
       data: '',
       address: [],
       money: []
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
    moneymap.set(keysmap.SenderAddr,keysmap.Contrivalue) //hash map woud take care of uniqueness 

    proposalissued = Object.values(Object.values(keys[0]))[1][0] 
    deadline = proposalissued.deadline;
    name = keysmap.PropName;
    opA = proposalissued.optionAaddr
   opB = proposalissued.optionBaddr
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

  async handleSubmit(event){
    event.preventDefault()
    console.log('hello')
  
    let address = '0xa26575bab179486100e325fc32250cd20a78a28a'
   

    const myContract = new web3.eth.Contract(abi, address, {
      defaultAccount: '0x434f5800a864F6A8a03286c028AC60C3228dB54a', // default from address
      defaultGasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });



  

  console.log(myContract.address)
    let firstAcc
  
  
  
  
  
  
 
  myContract.methods.newVoteProposal('abc','hiodhcoishcosdichod',(Date.now() + 3600*1000)).send({from: 'Ee761EdA7A139F3fC5b8cAA138CB76aA4620x6Cdf5'}).then((receipt) =>{
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
  })
        console.log(myContract.address);

   
            
  }

  async handleSubmitA(event){
    event.preventDefault()
    web3.eth.sendTransaction({
      from: '0x434f5800a864F6A8a03286c028AC60C3228dB54a',
      to: opA,
      value: '1'
  })
  .then(function(receipt){
     console.log("success")
  });

  }

  async handleSubmitB(event){
    for (var i = 0, keys = Object.keys(moneymap), ii = keys.length; i < ii; i++) {
      console.log('key : ' + keys[i] + ' val : ' + moneymap[keys[i]]);
    }
    event.preventDefault()
    web3.eth.sendTransaction({
      from: '0x434f5800a864F6A8a03286c028AC60C3228dB54a',
      to: opB,
      value: '1'
  })
  .then(function(receipt){
   
  });

  }
  
  
  

  render(){
    return(
      <div>
      <Form>
      <Form.Group controlId="formProposal">
        <Form.Label>Enter Proposal</Form.Label>
       
        <Form.Control as="textarea" rows="3" onChange= {(e) =>{this.handleChange(e)}}/>
      </Form.Group>
      
    
    </Form>
    <br />
    <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)} >
        Submit
      </Button>
      <br />
      <div>
        {this.state.data}
      </div>
      <br />
     
      <Button variant="primary" type="submit" onClick={(e) => this.handleSubmitA(e)} >
        A
      </Button>
      <br />

      <Button variant="primary" type="submit" onClick={(e) => this.handleSubmitB(e)} >
        B
      </Button>
      <br />
      
      </div>
    )
  }
}
export default App;

