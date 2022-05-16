pragma solidity ^0.5.16;

contract ResourceRentalUniversity {
    // Config Variables
    uint256 maxRooms;
    uint256 maxAmountSmartContracts;
    uint256 maxRentTime;
    uint256 offsetBookingTime;
    Permission resourcePermission;

    // Resource Information

    // University Params

    address university;

    // uint256 fromTimestamp;
    // uint256 toTimestamp;

    enum Permission {
        STUDENT,
        SCIENTIFIC_ASSISTANT,
        PROFESSOR
    }

    constructor() public {
        university = msg.sender;
    }

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

        emit BookingCreated(
            fromTimeStampInput,
            toTimeStampInput,
            renterAddress,
            renterPermission
        );
    }

    // Functionen

    function getUniversity() public view returns (address) {
        return university;
    }

    function getResourceRequiredPermission() public view returns (Permission) {}

    // Modifier

    modifier isUniversity() {
        require(msg.sender == university, "Caller is not owner");
        _;
    }
    // Events

    event BookingCreated(
        uint256 fromTimeStamp,
        uint256 toTimeStamp,
        address renterAddress,
        Permission renterPermission
    );
}
