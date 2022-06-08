pragma solidity ^0.5.16;

contract ResourceRentalGetInformation {}
pragma solidity ^0.5.16;

contract ResourceRental {
    address owner;
    address currentRenter;
    uint256 fromTimestamp;
    uint256 toTimestamp;
    uint256 maxRentTime;
    uint256 offsetBookingTime;
    Permission resourcePermission;

    enum Permission {
        STUDENT,
        SCIENTIFIC_ASSISTANT,
        PROFESSOR
    }

    constructor(
        Permission permissionInput,
        uint256 maxRentTimeInput,
        uint256 offsetBookingTimeInput
    ) public {
        owner = msg.sender;
        maxRentTime = maxRentTimeInput;
        offsetBookingTime = offsetBookingTimeInput;
        resourcePermission = permissionInput;
    }

    event BookingCreated(
        uint256 fromTimeStamp,
        uint256 toTimeStamp,
        address renterAddress,
        Permission renterPermission
    );

    function createBooking(
        uint256 fromTimeStampInput,
        uint256 toTimeStampInput,
        address renterAddress,
        Permission renterPermission
    ) public {
        require(
            block.timestamp < (offsetBookingTime + uint256(fromTimeStampInput)),
            "The rental must be in future"
        );

        require(
            (renterPermission >= resourcePermission),
            "The User is allowed to book the room"
        );

        currentRenter = renterAddress;
        fromTimestamp = fromTimeStampInput;
        toTimestamp = toTimeStampInput;

        emit BookingCreated(
            fromTimeStampInput,
            toTimeStampInput,
            renterAddress,
            renterPermission
        );
    }

    function getRentalRenter() public view returns (address) {
        return currentRenter;
    }

    function getResourceRequiredPermission() public view returns (Permission) {
        return resourcePermission;
    }

    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
}
