function convertTime(value) {
  let hours = ~~(value / 60);
  let minutes = value % 60;

  hours += hours == 1 ? " hour, " : " hours, ";

  minutes += minutes == 1 ? " minute" : " minutes";

  return hours + minutes;
}
console.log(convertTime(60));
