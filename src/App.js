import { StyledCalendar } from "./styled/StyledCalendar";

function App() {
  return (
    <div style={{ height: "100%" }}>
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
    </div>
  );
}

export default App;
