
const clock = document.querySelector("#clock");
const todayDate = document.querySelector("#date")

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const months = date.getMonth()+1
  const dates = date.getDate()
  const day = date.getDay()

  if (day === 1) {
    engDay = "Mon　|　one day or day one. It's you choice"
  } else if (day === 2) {
    engDay = "Tue　|　This too shall pass away"
  } else if (day === 3) {
    engDay = "Wed　|　All We have is now"
  }else if (day === 4) {
    engDay = "Thu　|　If not now, then when?"
  }else if (day === 5) {
    engDay = "Fri　|　Hang in there"
  }else if (day === 6) {
    engDay = "Sat　|　 Don't waste your youth"
  }else {
    engDay = "Sun　|　Seize the day"
  }

  todayDate.innerText = `${months} / ${dates} / ${engDay}`
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);