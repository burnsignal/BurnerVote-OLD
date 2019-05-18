pragma solidity ^0.5.0;

contract VoteProposalPool {
    
    struct VoteProposal {
        address issuer;
        uint deadline;
        string name;
        string data;
    }
    
    VoteProposal[] public proposals;
    
    constructor() public {}
    
    function newVoteProposal(
        string calldata _name,
        string calldata _data,
        uint64 _deadline
    )
        external
        validateDeadline(_deadline)
        returns (uint)
    {
        proposals.push(VoteProposal(msg.sender, _deadline, _name, _data));
        emit newProposalIssued(proposals.length - 1, msg.sender, _deadline, _name, _data);
        return (proposals.length - 1);
    }
    
    /**
     * Modifiers
     */
     
    modifier validateDeadline(uint _newDeadline) {
      require(_newDeadline > now);
      _;
    }
    
    
    /**
     * Events
     */
     event newProposalIssued(uint proposalID, address issuer, uint deadline, string name, string data);
}
