import React, { Component } from 'react'
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import Form from 'react-bootstrap/Form';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
import Button from 'react-bootstrap/Button';

var provider
var web3
var defaultAccount

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
// import Formatic from 'formatic';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/sneh1999/snehsubgraph',
  cache: new InMemoryCache(),
})


// const GET_EVENTS = gql`
//   query contractCreateds() {
//     contractCreateds {
//       id
//       sender
//       amount
//     }
//   }
// `

// class App extends Component {
//   constructor() {
//     super()
   
//   }

 

//   render() {
//          return (
//            <ApolloProvider client={client}>
//            <div>
//            <Query query={GET_EVENTS} >
//            {({ loading, error, data }) => {
//           if (loading) return "Loading...";
//           if (error) return `Error! ${error.message}`;

//           return (
//             <div>
//               hello
//             </div>
//       );
//     }}
//   </Query>
//       )
    
//         hello
//       </div>

//            </ApolloProvider>
        
//     )
//   }
// }
// export default App









class App extends Component {
  constructor(props){
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 async componentDidMount(){
    if(typeof window.ethereum === 'undefined'){
      console.log("wrong")
      return;
    }
    else{
      try{
        const accounts = await window.ethereum.enable()
        console.log(accounts)
        provider = window.ethereum;
        web3 = new Web3(provider);
        defaultAccount = web3.eth.accounts[0];
        console.log(defaultAccount)
  
      }
      catch(error){
        window.alert(error)
      }
    }
   
  }

  handleChange(event) {
    
    event.preventDefault();
    this.setState({
      value: event.target.value
    })
  }

  async handleSubmit(event){
    
    
  
    let address = '0xa26575bab179486100e325fc32250cd20a78a28a'
    let contractabi = await web3.eth.contract(abi ,function (err, transaction) {
      if (err) {
        return alert(`Sorry you weren't able to contribute!`)
      }

      alert('Thanks for your successful contribution!')
    })

  

    
    let contract = contractabi.at('0xa26575bab179486100e325fc32250cd20a78a28a');
    var int = await contract.newVoteProposal('abc','hiodhcoishcosdichod', Date.now() + 3600 * 1000 ,{from: '0x0acb691fF5530040C5cBf275623e7641058B5Ccb', gas:1000000},function (err, transaction) {
      if (err) {
        return alert(`Sorry you weren't able to contribute!`)
      }
      //console.log(transaction)

      alert('Thanks for your successful contribution!')
    })
    console.log(int)
    
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
    <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)} >
        Submit
      </Button>
      </div>
    )
  }
}
export default App