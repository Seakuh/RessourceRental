pragma solidity >=0.4.21 <8.10.0;

contract DeviceRental {
    // ============================================== Constants =======================================================

    // =============================================== Types ========================================================

    struct Device {
        uint256 deviceId;
        string deviceName;
        bool loanable;
        uint256 loanInterval;
        uint256 deviceElectricityCostPerHour;
        uint256 deviceCosts;
        uint256 computingPower;
        bool buyOut;
        uint256 appraisedValue;
    }

    struct Entry {
        address renter;
        address reverse;
        Device device;
        address devices;
        uint256 startDate;
        uint256 endDate;
    }

    enum Roles {
        STUDENT,
        TEACHER,
        PROFESSOR,
        FACILITY_MANAGER
    }

    // =============================================== Storage ========================================================

    mapping(address => uint256) public previousRenter;
    mapping(bytes32 => Entry) internal entries;
    mapping(uint256 => Roles) public roles;

    address private owner;
    uint256 rentalDuration;
    mapping(address => Device) public devices;
    uint256 maxRental;
    uint256 rentalInterval;

    // =============================================== Constructor ======================================================

    constructor() {
        owner = msg.sender;
        emit OwnerSet(address(0), owner);
    }

    // ================================================ Events ========================================================

    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    event RentalCertificate();

    // ================================================ Modifier=======================================================

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    modifier isDeviceFree() {
        _;
    }

    // =============================================== Getters ========================================================

    function getOwner() external view returns (address) {
        return owner;
    }

    function getDeviceStatus() public {}

    // ============================================== Functions ========================================================

    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    function createLease(uint256 duration, uint256 deviceId) public {}

    function buyOut(uint256 _deviceId, address _buyer) public {}

    /// @dev Throws if called by any account other than the owner.
    modifier onlyOwner() {
        require(owner == msg.sender, "caller is not the owner");
        _;
    }
}
