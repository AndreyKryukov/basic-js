export default function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(!isNaN(date) && date instanceof Date)) {
    throw new Error("There is a problem");
  }

  if (11 == date.getMonth() || date.getMonth() <= 1) {
    return "winter";
  } else if (2 <= date.getMonth() && date.getMonth() <= 4) {
    return "spring";
  } else if (5 <= date.getMonth() && date.getMonth() <= 7) {
    return "summer";
  } else if (8 <= date.getMonth() && date.getMonth() <= 10) {
    return "autumn";
  }
}
