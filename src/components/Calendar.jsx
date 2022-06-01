import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";
import { useRef } from "react";
import { StyledMonthSwitch } from "../styled/StyledMonthSwitch";

export function Calendar(props) {
  const { className, theme, events } = props;
  const calendar = useRef(null);

  return (
    <div className={className}>
      <StyledMonthSwitch onNext={console.log}>June</StyledMonthSwitch>
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
        // selectedView={selectedView}
        onPageChange={console.log}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        colors={{
          light: {
            primaryColor: theme.color,
          },
        }}
      />
    </div>
  );
}
