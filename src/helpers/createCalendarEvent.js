import uniqid from "uniqid";

export function createCalendarEvent(time, color) {
  const placeT = time.trim().replace(" ", "T");
  const date = new Date(placeT);
  date.setHours(date.getHours() + 1);

  return {
    id: uniqid(),
    startAt: placeT,
    endAt: date.toISOString(),
    summary: "",
    color
  };
}
