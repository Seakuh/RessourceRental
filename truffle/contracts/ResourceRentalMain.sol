pragma solidity >=0.5.0 <0.6.0;

contract ResourceRentalMain {
    Booking booking;
    address backendAddress;
    string message;

    constructor() public {
        backendAddress = msg.sender;
        message = "Booking Contract created...";
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function getBackendAddress() public view returns (string memory) {
        return message;
    }

    // function getBooking() public view returns (string memory) {
    //     return booking.bookingId;
    // }

    function createResourceBooking(
        uint256 _bookingId,
        uint256 _resourceId,
        uint256 _startTimestamp,
        uint256 _endTimestamp,
        uint256 _offsetBookingTime
    ) public isBackend {
        require(
            block.timestamp <
                (booking.offsetBookingTime + uint256(_startTimestamp)),
            "The booking has to be in the future"
        );

        // require(
        //     (booking.renterPermission >= booking.resourcePermission),
        //     "The User is allowed to book the room"
        // );

        require(
            (booking.startTimestamp + booking.endTimestamp <=
                booking.maxRentTime),
            "The booking time is above the maxRentTime"
        );

        booking = Booking(
            _bookingId,
            _resourceId,
            _startTimestamp,
            _endTimestamp,
            _offsetBookingTime
        );
        emit NewResourceBooking(
            _bookingId,
            _resourceId,
            _startTimestamp,
            _endTimestamp
        );
    }

    struct Booking {
        uint256 resourceId;
        uint256 startTimestamp;
        uint256 endTimestamp;
        uint256 maxRentTime;
        uint256 offsetBookingTime;
    }

    function extendResourceBooking(
        uint256 _exentTime,
        uint256 _resourceId,
        uint256 _startTimestamp,
        uint256 _endTimestamp
    ) public isBackend {
        emit ExtendResourceBooking(
            _exentTime,
            _resourceId,
            _startTimestamp,
            _endTimestamp + _exentTime
        );
    }

    modifier isBackend() {
        if (msg.sender == backendAddress) _;
    }

    event ExtendResourceBooking(
        uint256 bookingId,
        uint256 resourceId,
        uint256 startTimestamp,
        uint256 endTimestamp
    );

    event NewResourceBooking(
        uint256 bookingId,
        uint256 resourceId,
        uint256 startTimestamp,
        uint256 endTimestamp
    );
}
