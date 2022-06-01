import uniqid from "uniqid";

export function createCalendarEvent(time, color) {
  const placeT = time.trim().replace(" ", "T").slice(0, 14) + '05:00';
  console.log(placeT);
  const date = new Date(placeT);
  date.setMinutes(55);

  return {
    id: uniqid(),
    startAt: placeT,
    endAt: date.toISOString(),
    summary: "",
    color
  };
}
