import React, { Component } from 'react'
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import Form from 'react-bootstrap/Form';

import Web3 from 'web3';
import Button from 'react-bootstrap/Button';

var providerone
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
//           if (error) return Error! ${error.message};

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
        providerone = window.ethereum

        web3 = new Web3(window.ethereum);

        // defaultAccount = web3.eth.accounts[0];
        // console.log(defaultAccount)
  
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
    event.preventDefault()
    console.log('hello')
  
    let address = '0xa26575bab179486100e325fc32250cd20a78a28a'
   

    const myContract = new web3.eth.Contract(abi, address, {
      defaultAccount: '0x6Cdf5Ee761EdA7A139F3fC5b8cAA138CB76aA462', // default from address
      defaultGasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });
    //   ,function (err, transaction) {
    //   if (err) {
    //     console.log(err)
    //     return alert(`Sorry you weren't able to contribute!`)
    //   }

    //   alert('Thanks for your successful contribution!')
    // })

  console.log(myContract.address)
    let firstAcc
  //   myContract.methods.newVoteProposal(
  //    ['abc','hiodhcoishcosdichod',(Date.now() + 3600*1000)])
  // .send({
  //   from: '0x6Cdf5Ee761EdA7A139F3fC5b8cAA138CB76aA462',
  //     gas: 1500000,
  // }).then(function (receipt) {
  //   console.log(receipt);
  // }).catch(function (error) {
  //   console.log(error);
  // });
  myContract.methods.newVoteProposal('abc','hiodhcoishcosdichod',(Date.now() + 3600*1000)).send({from: '0x6Cdf5Ee761EdA7A139F3fC5b8cAA138CB76aA462'}).then((receipt) =>{
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
  })
  
  
    

    // var int = await contract.newVoteProposal('abc','hiodhcoishcosdichod',152,{from: '0xBE4dD6Bae372CBA479176297b67D0D42447aFAE6',gas: 1000000},async (error, txHash) => {
    //   if(!error)
    //   waitForTxToBeMined(txHash)
    //   else
    //   console.error
    // })

    //  var int = await contract.methods.newVoteProposal('abc','hiodhcoishcosdichod',Date.now() + 36000*10000).send({ from: '0xBE4dD6Bae372CBA479176297b67D0D42447aFAE6'}).then(receipt => { /** some action **/ });

     


    // async function waitForTxToBeMined (txHash){
    //   let txReceipt;
     
      

        console.log(myContract.address);

    //   web3.eth.filter('latest', function (error, result) {
    //     if (!error) {
    //       try {
    //         txReceipt = web3.eth.getTransactionReceipt(txHash, (error, txObj) => {
    //           if (error) {
    //             return error
    //           }
    //           else {
    //             if (txObj.status === "0x0") {
    //               window.alert("Error was encountered.Please make sure you are not voting from same account you voted from before.")
    //               location.reload()
    //             }
    //             else {
    //               window.alert("Your vote got added!")
    //               location.reload();
    //             }
    //           }
  
    //           // return txObj
    //         })
    //         // console.log(txReceipt)
    //       } catch (err) {
    //         console.log("unsuccess");
    //         //  console.warn(err);
    //         // location.reload();
  
    //       }
    //     } else {
    //       console.error(error)
    //     }
    //   })
    // }
            
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
