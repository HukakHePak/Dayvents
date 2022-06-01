import Kalend from "kalend";
import "kalend/dist/styles/index.css";
import { useRef, useState } from "react";
import { createCalendarEvent } from "../helpers/createCalendarEvent";
import { getMonthYear } from "../helpers/getMonthYear";
import { StyledButton } from "../styled/StyledButton";
import { StyledMonthSwitch } from "../styled/StyledMonthSwitch";
import { StyledPlusLine } from "../styled/StyledPlusLine";
import { StyledToolPanel } from "../styled/StyledToolPanel";

export function Calendar(props) {
  const { className, theme, events, onChange } = props;
  const calendar = useRef(null);

  const [selected, setSelected] = useState(null);
  const [month, setMonth] = useState("");

  function removeHandler() {
    setSelected(null);
    onChange(events.filter((item) => item.id !== selected.id));
  }

  function selectHandler(event) {
    setSelected((state) => (state && state.id === event.id ? null : event));
  }

  function addEventHandler() {
    try {
      const date = prompt(
        "Enter event time: \n YYYY-MM-DD HH:mm:ss",
        new Date().toISOString()
      );

      onChange([...events, createCalendarEvent(date, theme.eventColor)]);
    } catch {
      console.error("invalid date");
    }
  }

  return (
    <div className={className}>
      <StyledPlusLine theme={{ color: "#ff3131" }} onClick={addEventHandler}>
        Interview Calendar
      </StyledPlusLine>
      <div className="calendar-container">
        <StyledMonthSwitch
          onNext={() => calendar?.current.navigateForward()}
          onLast={() => calendar?.current.navigateBackwards()}
          color={theme.color}
        >
          {month}
        </StyledMonthSwitch>

        <Kalend
          kalendRef={calendar}
          events={events.map((item) =>
            item.id === selected?.id
              ? { ...item, color: theme.activeColor }
              : item
          )}
          hourHeight={60}
          onEventClick={selectHandler}
          onEventDragFinish={selectHandler}
          onPageChange={(event) => setMonth(getMonthYear(event.rangeFrom))}
          colors={{
            light: {
              primaryColor: theme.color,
            },
          }}
        />

        <StyledToolPanel>
          <StyledButton
            color={theme.color}
            onClick={() => calendar?.current.navigateToTodayDate()}
          >
            Today
          </StyledButton>
          <StyledButton
            color={theme.color}
            onClick={removeHandler}
            hidden={!selected}
          >
            Delete
          </StyledButton>
        </StyledToolPanel>
      </div>
    </div>
  );
}
