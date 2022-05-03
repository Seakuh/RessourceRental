pragma solidity >=0.4.21 <8.10.0;

contract Storage {
    // =============================================== Types ========================================================

    struct RoomRental {
        address contractAddress;
        uint256 from;
        uint256 to;
    }

    struct DeviceRental {
        address contractAddress;
        uint256 from;
        uint256 to;
    }

    // =============================================== Storage ========================================================

    mapping(uint256 => RoomRental) public roomRentalStorage;
    mapping(uint256 => DeviceRental) public deviceRentalStorage;

    // ================================================ Modifier=======================================================

    modifier onlyRentalContract() {
        _;
    }

    // ============================================== Functions ========================================================

    function saveRoomRental() public onlyRentalContract {}

    function saveDeviceRental() public onlyRentalContract {}

    // =============================================== Getters ========================================================

    function getDeviceStatus() public {}

    function getRoomStatus() public {}
}
