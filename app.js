function showTime() {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }

  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let fullTime = hour + ":" + min + ":" + sec + " " + am_pm;
  document.getElementById("clock").innerText = fullTime;

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  let fullDay = day + " " + "|" + " " + month + " " + "|" + " " + year;
  document.getElementById("date-time").innerText = fullDay;

  setInterval(showTime, 1000);
}
showTime();
