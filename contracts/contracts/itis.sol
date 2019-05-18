pragma solidity ^0.5.0;

contract VoteOption {
    VoteProposalPool creator;
    address owner;
    address voteOptionAddress;
    uint deadline;
    string name;
    string option;
    
    constructor(uint _deadline, string memory _name, string memory _option) public {
        owner = msg.sender;
        creator = VoteProposalPool(msg.sender);
        voteOptionAddress = address(this);
        deadline = _deadline;
        name = _name;
        option = _option;
    }
}

contract VoteProposalPool {
    
    struct VoteProposal {
        address issuer;
        uint deadline;
        string name;
        string data;
    }
    
    VoteProposal[] public proposals;
    
    function newVoteProposal(
        string calldata _name,
        string calldata _data,
        uint64 _deadline
    )
        external
        validateDeadline(_deadline)
        returns (VoteOption newVoteOptionA, VoteOption newVoteOptionB, uint)
    {
        proposals.push(VoteProposal(msg.sender, _deadline, _name, _data));
        VoteOption yes = new VoteOption(_deadline, _name, "yes");
        VoteOption no = new VoteOption(_deadline, _name, "no");
        emit newProposalIssued(proposals.length - 1, msg.sender, _deadline, _name, _data, "yes", "no");
        return (yes, no, proposals.length - 1);
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
     event newProposalIssued(uint proposalID, address issuer, uint deadline, string name, string data, string optionA, string optionB);
}