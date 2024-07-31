function getCurrentDateTime() {
  let now = new Date();
  let currentDateTime = now.toString();
  return currentDateTime;
}
let currentDateTime = getCurrentDateTime();
console.log("Current date and time:", currentDateTime);

//2
function extractDateComponents(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return { year, month, day };
}
let currentDate = new Date();
let dateComponents = extractDateComponents(currentDate);
console.log("Year:", dateComponents.year);
console.log("Month:", dateComponents.month);
console.log("Day:", dateComponents.day);

//3
function addDaysToDate(date, days) {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}
let currentDate1 = new Date();
let futureDate = addDaysToDate(currentDate, 7);
console.log("Current date:", currentDate.toDateString());
console.log("Date after adding 7 days:", futureDate.toDateString());
