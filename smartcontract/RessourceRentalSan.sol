// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

//Define the contract
contract RoomContract {
    address renter;
    uint256 fromDate;
    uint256 toDate;
    uint256 roomId;
    string status;

    function createRoomContract(
        uint256 fromTimestamp,
        uint256 toTimeStamp,
        uint256 roomId
    ) public view {
        renter = msg.sender;
    }

    function getFromDate() public view {}

    function getToDate() public view {}

    function getRenter() public view {}
}

contract Room {
    uint256 public roomId;

    address public owner;

    uint256 maxBookingTime;
    uint256 minBookingTime;
    uint256 offsetBookingTime;
    uint256 minimumDuration;

    mapping(uint256 => RoomContract) public roomContracts;

    function rentRoom(uint256 fromTimestamp, uint256 toTimeStamp) public view {
        require(
            block.timestamp < (7200 + fromTimestamp),
            "The rental must be in the 2 hours future"
        );

        require(
            block.timestamp < (7776000 + fromTimestamp),
            "the room can be booked no more than 90 days in advance"
        );

        require(
            toTimeStamp - fromTimestamp > 1800,
            "the rental duration have to be at least 30 minutes"
        );

        require(
            isRoomFree(fromTimestamp, toTimeStamp),
            "The room must be free at the booking time"
        );

        // roomContracts.push(RoomContract());

        // sort list by toDate

        // filter

        // check if the room is free
    }

    function isRoomFree(uint256 fromTimestamp, uint256 toTimeStamp)
        public
        returns (bool)
    {
        return true;
    }

    function withdrawRoomRental() public {}
}
