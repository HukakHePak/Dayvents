import Kalend from "kalend";
import "kalend/dist/styles/index.css";
import { useRef } from "react";
import { StyledButton } from "../styled/StyledButton";
import { StyledMonthSwitch } from "../styled/StyledMonthSwitch";
import { StyledToolPanel } from "../styled/StyledToolPanel";

export function Calendar(props) {
  const { className, theme, events } = props;
  const calendar = useRef(null);

  return (
    <div className={className}>
      <StyledMonthSwitch
        onNext={() => calendar?.current.navigateForward()}
        onLast={() => calendar?.current.navigateBackwards()}
        //onMonthChange={() => calendar?.current.navigateToTodayDate()}
      >
        June
      </StyledMonthSwitch>
      <Kalend
        kalendRef={calendar}
        events={events}
        hourHeight={60}
        //onEventClick={onEventClick}
        //onNewEventClick={onNewEventClick}
        //disabledViews={[CalendarView.DAY]}
        // onSelectView={console.log}
        // onSelectViewData={console.log}
        // OnPageChangeData={console.log}
        onPageChange={console.log}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        colors={{
          light: {
            primaryColor: theme.color,
          },
        }}
      />
      <StyledToolPanel>
        <StyledButton color={theme.color} active> Today </StyledButton>
        <StyledButton color={theme.color} > Delete </StyledButton>
      </StyledToolPanel>
    </div>
  );
}
