import styled from "styled-components";
import { StyledCalendar } from "./styled/StyledCalendar";
import { StyledPlusLine } from "./styled/StyledPlusLine";
import EventsData from "./EventsData.json";
import { useState } from "react";
import { createCalendarEvent } from "./helpers/createCalendarEvent";

const AppStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Theme = {
  color: "#ff3131",
  activeColor: "#b3b7ff",
  eventColor: "#ebecff",
};

function App() {
  const [events, setEvents] = useState(EventsData);
  //console.log(events);
  function addEventHandler() {
    try {
      const date = prompt(
        "Enter event time: \n YYYY-MM-DD HH:mm:ss",
        new Date().toISOString()
      );

      setEvents([...events, createCalendarEvent(date, Theme.eventColor)]);
    } catch {
      console.error("invalid date");
    }
  }

  return (
    <AppStyle>
      <StyledPlusLine theme={{ color: "#ff3131" }} onClick={addEventHandler}>
        Interview Calendar
      </StyledPlusLine>
      <StyledCalendar
        theme={Theme}
        events={events}
        onChange={setEvents}
      />
    </AppStyle>
  );
}

export default App;
