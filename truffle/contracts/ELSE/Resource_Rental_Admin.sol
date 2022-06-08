pragma solidity >=0.4.25 <0.9.0;

contract Resource {
    address owner;
    uint256 maxRentTime;
    uint256 offsetBookingTime;
}

contract Room is Resource {}

contract Device is Resource {}

contract ResourceRentalAdmin {
    struct Resource {
        uint256 deviceId;
        string deviceName;
    }

    address admin;
    mapping(address => Resource) public devices;

    // change data

    // constructor
    constructor() public {
        admin = msg.sender;
    }

    modifier _isadmin() {
        require(msg.sender == admin, "Caller is not admin");
        _;
    }

    // function isSenderAdmin() _isadmin {}
}
