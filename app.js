 function getTime() {
   let time = new Date();
   let hour = time.getHours();
   let min = time.getMinutes();
   let sec = time.getSeconds();
   let day = time.getDate();
   let month = time.getMonth()+1 ;
   console.log(month);
   let year = time.getFullYear();
   AM_PM = "AM";

   if (hour > 12) {
     hour -= 12;
     AM_PM = "PM";
   }

   if (hour == 0) {
     hour = 12;
     AM_PM = "AM";
   }

   hour = hour < 10 ? "0" + hour : hour;
   min = min < 10 ? "0" + min : min;
   sec = sec < 10 ? "0" + sec : sec;

   let fullTime = hour + ":" + min + ":" + sec + " " + AM_PM;
   document.querySelector(".day-time").innerText = fullTime;

   day = day < 10 ? "0" + day : day;
   month = month < 10 ? "0" + month : month;

   let fullDay = day + " " + "/" + " " + month + " " + "/" + " " + year;
   document.querySelector(".date-time").innerText = fullDay;

   setInterval(getTime, 1000);
 }
 getTime();
