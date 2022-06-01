import styled from "styled-components";
import { StyledCalendar } from "./styled/StyledCalendar";
import { useState } from "react";

const AppStyle = styled.div`
  height: 100%;
  display: flex;
`;

const Theme = {
  color: "#ff3131",
  activeColor: "#b3b7ff",
  eventColor: "#ebecff",
};

function App() {
  const [events, setEvents] = useState([]);

  return (
    <AppStyle>

      <StyledCalendar
        theme={Theme}
        events={events}
        onChange={setEvents}
      />
    </AppStyle>
  );
}

export default App;
