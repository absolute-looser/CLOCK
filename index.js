let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");
function rotate() {
  // Taking Current Dates
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  //Calculating Fraction of rotation
  const secondFraction = second / 60;
  const minutesFraction = (minutes + secondFraction) / 60;
  const hourFraction = (minutesFraction + hours) / 12;
  // Calculating Actual angle rotation.
  const secondRotate = secondFraction * 360;
  const minuteRotate = minutesFraction * 360;
  const hourRatate = hourFraction * 360;
  secondHand.style.transform = `rotate(${secondRotate}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotate}deg)`;
  hourHand.style.transform = `rotate(${hourRatate}deg)`;
}
setInterval(rotate, 1000);
