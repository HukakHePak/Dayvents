export function getMonth(time) {
  return new Date(time).toLocaleDateString("en-US", { month: "long" });
}
