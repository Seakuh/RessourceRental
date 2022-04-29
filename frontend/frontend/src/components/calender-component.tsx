import React, { FC, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

interface CalendarComponentProps {}

export const CalendarComponent: FC<CalendarComponentProps> = (props) => {
  const [value, onChange] = useState(new Date());

    

  return (
    <div className="App">
      <header className="App-header"></header>
      <CalendarContainer>
        <Calendar
          onChange={onChange}
          value={value}
          minDate={new Date(Date.now())}
        />
      </CalendarContainer>
    </div>
  );
};

const CalendarContainer = styled.div`
  width: 250px;
  gap: 20px;
  height: 300px;
  border-style: solid;
  align: center;
`;

export default CalendarComponent;
