export function getMonthYear(time) {
  return new Date(time).toLocaleDateString("en-US", { month: "long", year: 'numeric' });
}
