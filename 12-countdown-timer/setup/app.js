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
const c = console.log.bind(console)
const giveAway= document.querySelector('.giveaway');
const deadline= document.querySelector('.deadline');
const items= document.querySelectorAll('.deadline-format h4');
// display future date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let future = new Date(tempYear,tempMonth,tempDay+10,11,30,0)

const futureYear = future.getFullYear()
const futureDate = future.getDate()
const futureMonth = months[future.getMonth()]
const futureDay= weekdays[future.getDay()]
const futureHour= future.getHours()
const futureMins= future.getMinutes()

giveAway.innerHTML=`giveaway ends on ${futureDay}, ${futureDate} ${futureMonth} ${futureYear}, ${futureHour}:${futureMins}am`

const futureTime = future.getTime()
c(future)
c(futureTime)
// get remaining time

function getRemainingTime(){
  const current = new Date()
const currentTime = current.getTime()
let t = futureTime-currentTime 
// calc the value of one day,hour etc
const oneDay = 24*60*60*1000
const oneHour = 60*60*1000
const oneMin = 60*1000

let day =Math.floor(t/oneDay)
let hour =Math.floor((t%oneDay)/oneHour)
let mins =Math.floor((t%oneHour)/oneMin)
let secs =Math.floor((t%oneMin)/1000)

const date = [day, hour,mins,secs];
function format(date) {
  if (date<10) {
    return (date=`0${date}`)
  }
  return date
}

for (const [index,value] of items.entries()) {
  value.innerHTML= format(date[index])
}

if(t<0){
  clearInterval(countdown);
 deadline.innerHTML=`<h4 class="expired">sorry, this giveaway has expired!</h4>`
}


}
//count down functionality
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime()


