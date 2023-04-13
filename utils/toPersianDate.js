export default function toPersianDate(date) {
  return new Date(date).toLocaleString("fa-IR", {
    dateStyle: "medium",
  });
}
