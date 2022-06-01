import styled from 'styled-components';
import { StyledCalendar } from "./styled/StyledCalendar";
import { StyledPlusLine } from './styled/StyledPlusLine';

const AppStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppStyle>
      <StyledPlusLine theme={{ color: "#ff3131" }} onClick> Interview Calendar </StyledPlusLine>
      <StyledCalendar
        theme={{ color: "#ff3131" }}
        events={[
          {
            id: 1,
            startAt: "2022-06-01T18:00:00.000Z",
            endAt: "2022-06-01T19:00:00.000Z",
            summary: "test",
            color: "blue",
            calendarID: "work",
          },
        ]}
      />
    </AppStyle>
  );
}

export default App;
