import Kalend from "kalend";
import "kalend/dist/styles/index.css";
import { useRef, useState } from "react";
import { getMonth } from "../helpers/getMonth";
import { StyledButton } from "../styled/StyledButton";
import { StyledMonthSwitch } from "../styled/StyledMonthSwitch";
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
    console.log(calendar.current);
    setSelected((state) => (state && state.id === event.id ? null : event));
  }

  return (
    <div className={className}>
      <StyledMonthSwitch
        onNext={() => calendar?.current.navigateForward()}
        onLast={() => calendar?.current.navigateBackwards()}
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
        onPageChange={(event) => setMonth(getMonth(event.rangeFrom))}
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
  );
}
