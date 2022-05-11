pragma solidity ^0.5.16;

contract ResourceRental {
    uint256 public bookingsCount = 0;
    mapping(uint256 => Booking) public bookings;
    // address public owner;
    Resource resourceInformation;

    struct Booking {
        uint256 bookingId;
        uint256 fromDate;
        uint256 toDate;
        uint256 renter;
    }

    struct Resource {
        uint256 maxRentTime;
        bool buyOut;
    }

    constructor() public {
        // owner = msg.sender;
    }

    event BookingCreated(
        uint256 bookingId,
        uint256 fromTimeStamp,
        uint256 toTimeStamp
    );

    function createBooking(
        uint256 fromTimeStamp,
        uint256 toTimeStamp,
        uint256 renterAddress
    ) public {
        bookingsCount++;

        bookings[bookingsCount] = Booking(
            bookingsCount,
            fromTimeStamp,
            toTimeStamp,
            renterAddress
        );

        emit BookingCreated(bookingsCount, fromTimeStamp, toTimeStamp);
    }
}
