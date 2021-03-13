/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
const greet = (str) => {
  // If the time is earlier than 12pm, return "Good Morning".
  // If the time is between 12pm and 5pm, return "Good Afternoon".
  //   If the time is later than 5pm, return "Good Evening".
  let nowTime = str.split(':');
  let nowHour = parseInt(nowTime[0]);
  if (nowHour < "12pm") {
    return "Good Morning";
  } else if (nowHour > "5pm") {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}