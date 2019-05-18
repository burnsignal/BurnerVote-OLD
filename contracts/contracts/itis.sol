pragma solidity ^0.5.0;

contract VoteOption {
    VoteProposal creator;
    address owner;
    address voteOptionAddress;
    uint deadline;
    string option;
    
    constructor(uint _deadline, string memory _option) public {
        owner = msg.sender;
        creator = VoteProposal(msg.sender);
        voteOptionAddress = address(this);
        deadline = _deadline;
        option = _option;
    }
}

contract VoteProposal {
    VoteProposalPool creator;
    address owner;
    uint deadline;
    string name;
    string data;
    
    /**
     * Storage
     */
    
    mapping(uint => address) public options;
    
    constructor(uint _deadline, string memory _name, string memory _data) public {
        owner = msg.sender;
        creator = VoteProposalPool(msg.sender);
        deadline = _deadline;
        name = _name;
        data = _data;
    }
    
    function createOptions(uint _deadline) 
        external
        returns (VoteOption newVoteOptionA, VoteOption newVoteOptionB)
    {
        VoteOption yes = new VoteOption(_deadline, "yes");
        VoteOption no = new VoteOption(_deadline, "no"); 
        options[0] = address(yes);
        options[1] = address(no);
        return (yes, no);
    }
}

contract VoteProposalPool {
    
    /**
     * Storage
     */
    
    function newVoteProposal(
        string calldata _name,
        string calldata _data,
        uint64 _deadline
    )
        external
        validateDeadline(_deadline)
        returns (VoteProposal newProposal)
    {
        VoteProposal proposal = new VoteProposal(_deadline, _name, _data);
        proposal.createOptions(_deadline);
        emit newProposalIssued(msg.sender, _deadline, _name, _data, "yes", proposal.options(0), "no", proposal.options(1));
        return (proposal);
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
     event newProposalIssued(address issuer, uint deadline, string name, string data, string optionA, address optionAaddr, string optionB, address optionBaddr);
}