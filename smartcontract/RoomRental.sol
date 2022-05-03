pragma solidity >=0.4.21 <8.10.0;

contract RoomRental {
    // ============================================== Constants =======================================================

    // =============================================== Types ========================================================

    struct Room {
        string renter;
        string roomId;
        uint256 capacity;
        uint256 costsPerHour;
        uint256 size;
    }

    struct Entry {
        address renter;
        address reverse;
        Room room;
        address devices;
        uint256 startDate;
        uint256 endDate;
    }

    // =============================================== Storage ========================================================

    mapping(address => uint256) public previousRenter;
    mapping(bytes32 => Entry) internal entries;

    uint256 public createdTimestamp;
    uint256 public rentalId;
    address public university;
    Room public room;

    // =============================================== Constructor ========================================================

    constructor(string memory _room) public {
        room = room;
        university = msg.sender;
        createdTimestamp = block.timestamp;
    }

    // ================================================ Events ========================================================

    event RentalCertificate();

    // =============================================== Getters ========================================================

    function getDeviceStatus() public {}

    function getRoomStatus() public {}

    // ============================================== Functions ========================================================

    function createLease() public {}

    function createDevice() public {}

    function buyOut() public {}

    function signLease() public {}

    function roomExists() public {}

    function withdrawRoomRental() public {}

    function updateRoom() public {}

    function endRental() public {}

    function setStartDate(uint256 _seconds) public {}

    function setEndDate(uint256 _seconds) public {}

    modifier isRoomAvalable() {
        _;
    }

    /// @dev Throws if called by any account other than the owner.
    modifier onlyOwner() {
        require(owner == msg.sender, "caller is not the owner");
        _;
    }
}
