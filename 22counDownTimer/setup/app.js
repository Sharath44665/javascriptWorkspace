const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timeItem = document.querySelectorAll(".deadline-format h4");
// console.log(timeItem) // all h4 items 

var futureDate = new Date(2024, 7, 31, 16, 24, 0); // yr month=starting_from_0 date hours mins secs
// console.log(futur    eDate) 
// futureDate.setDate(futureDate.getDate()+4) //to the current date add 4     

// console.log(futureDate)
const year = futureDate.getFullYear();
// console.log(futureDate.getMonth())
// console.log(futureDate.getDay())
// console.log(futureDate.getHours())
// console.log(futureDate.getMinutes())
// console.log(futureDate.getSeconds())
// console.log(futureDate.getDate())
// console.log(year)
const month = futureDate.getMonth();
const date = futureDate.getDate(); 
const day = futureDate.getDay();
var hours =futureDate.getHours();
const mins =futureDate.getMinutes();
const sec =futureDate.getSeconds();


giveaway.innerHTML = `give away ends on  ${weekdays[day]} ${months[month]} ${date}, ${year} at ${hours}:${mins}`;

// future time in ms 
const futureTime = futureDate.getTime()
// console.log(futureTime)

function getRemainingTime(){
  const todayDate = new Date();
  // console.log(todayDate.getTime());
  var remainingTime = futureTime - todayDate.getTime()
  // console.log(remaini  ngTime) // milliseconds
  
  // 1 sec = 1000 millisecond 
  // 1 minute = 60 sec 
  // 1 hours = 60 mins
  // 1 day = 24 hours 

  const oneDay = 24*60*60*1000;
  const hoursCount = 60*60*1000;
  const oneMin= 60*1000;

  var remainingDays = Math.floor(remainingTime/oneDay)
  // var remainingHours = remainingTime/hoursR //if big remainingtime then gives more 24
  var remainingHours = Math.floor((remainingTime%oneDay)/hoursCount)
  var remaningMins = Math.floor((remainingTime%hoursCount)/oneMin)
  var remainingSecs = Math.floor((remainingTime%oneMin)/1000)

  // console.log(remainingDays);
  // console.log(remainingHours);
  // console.log(remaningMins);  
  // console.log(remainingSecs);

  function formatVal(value){
    if (value    < 10){
      return `0${value}`;
    }
    return value;
  }

  const remaningValues = [remainingDays,remainingHours, remaningMins, remainingSecs]
  timeItem.forEach(function(item, idx){
    item.innerHTML = formatVal(remaningValues[idx]);    
  });

  if (remainingTime < 0){
    clearInterval(countDown);
    deadline.innerHTML= `<h4 class='expired'>Expired!!! This give away is not available at the moment.</h4>`
  }
}

var countDown = setInterval(getRemainingTime, 1000);     // call setinterval every 1 sec 
getRemainingTime();


