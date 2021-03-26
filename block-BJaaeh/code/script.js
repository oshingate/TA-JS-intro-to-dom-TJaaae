let secondsHand = document.querySelector(".handsec");
let minutesHand = document.querySelector(".handmin");
let hoursHand = document.querySelector(".handhr");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secDegree = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secDegree}deg)`;
  console.log(seconds);
  const minutes = now.getMinutes();
  const minDegree = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minDegree}deg)`;
  console.log(minutes);
  const hrs = now.getHours();
  const hrsDegree = (hrs / 60) * 360 + 90;
  hoursHand.style.transform = `rotate(${hrsDegree}deg)`;
  console.log(hrs);
}

setInterval(setDate, 1000);
