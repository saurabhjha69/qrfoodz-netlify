// const isoString = "2024-12-14T04:47:16.348+00:00";

function formatDateAndTime(isoString) {
  const date = new Date(isoString);

  // Format time as hr:min AM/PM
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTime = date.toLocaleString("en-US", timeOptions); // e.g., "4:47 AM"

  // Format date as Month Date, Year (e.g., Dec 14, 2024)
  const dateOptions = {
    year: "numeric",
    month: "short", // Short month name (Jan, Feb, etc.)
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", dateOptions); // e.g., "Dec 14, 2024"

  // Return both results
  return { time: formattedTime, date: formattedDate };
}

export default formatDateAndTime
// console.log(formatDateAndTime(isoString))
