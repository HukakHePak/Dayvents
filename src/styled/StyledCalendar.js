import styled from "styled-components";
import { Calendar } from "../components/Calendar";

export const StyledCalendar = styled(Calendar)`
  height: 100%;
  position: relative;

  & .Kalend__Calendar__root {
    height: 100%;
    gap: 22px;
    padding-bottom: 62px;
    box-sizing: border-box;
  }

  & .Kalend__CalendarDesktopNavigation__container {
    display: none;
  }

  & .Kalend__CalendarDesktopNavigation__container-mobile {
    display: none;
  }

  & .Kalend__CalendarHeader-tall {
    box-shadow: none;
    border-radius: 0;
    background: #f6f6f6;
    border-top: 2px solid #eeeeee;
    pointer-events: none;
    cursor: default;
  }

  & .Kalend__header_calendar_buttons__container {
    display: none;
  }

  & .Kalend__CalendarHeaderCol {
    padding-top: 5px;
    gap: 3px;
  }

  & .Kalend__button.Kalend__Event-normal.Kalend__ButtonBase > * {
    color: transparent;
  }
`;
