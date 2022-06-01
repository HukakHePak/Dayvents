import styled from "styled-components";
import { Calendar } from "../components/Calendar";

export const StyledCalendar = styled(Calendar)`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  border-left: 2px solid #eeeeee;
  border-right: 2px solid #eeeeee;
  width: 100%;

  @media (min-width: 768px) {
    width: 768px;
  }

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

  & .Kalend__CalendarHeaderWeekDays__text {
    font-size: 14px;
    color: black;
  }
  
  & .Kalend__CalendarHeaderDates__text {
    font-family: 'Roboto';
    font-size: 19px;
    font-weight: 400;
  }

  & .Kalend__header_calendar_buttons__container {
    display: none;
  }

  & .Kalend__CalendarHeaderCol {
    padding-top: 5px;
  }

  & .Kalend__button.Kalend__Event-normal.Kalend__ButtonBase > * {
    color: transparent;
  }

  & .Kalend__button.Kalend__Event-normal.Kalend__ButtonBase {
    border-radius: 0 !important;
  }

  & .calendar-container {
    position: relative;
    height: 100%;
  }
`;
