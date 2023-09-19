

// /////////////////////////////// =>  Clock Section 

let currentTime = () => {

    let myDate = new Date();

    let hrs = myDate.getHours() % 12 || 12;
    let mins = myDate.getMinutes();
    let secs = myDate.getSeconds();
    let session = myDate.getHours() <= 12 ? "AM" : "PM";


    let digitalClock = document.querySelector(".digitalClock");
    digitalClock.innerText = `${hrs.toString().padStart(2, "0")} | ${mins.toString().padStart(2, "0")} | ${secs.toString().padStart(2, "0")} | ${session}`;
}

let currentDate = () => {

    let myDate = new Date();

    let day = myDate.getDay();
    let date = myDate.getDate()
    let month = myDate.getMonth();
    let year = myDate.getFullYear();

    let daysOfTheWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let monthsOfTheYear = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    let formattedDay = daysOfTheWeek[myDate.getDay()];
    let formattedMonth = monthsOfTheYear[myDate.getMonth()];

    let todaysDate = document.querySelector(".currentDate");
    todaysDate.innerText = `${formattedDay.toUpperCase()}, ${formattedMonth.toUpperCase()} ${date.toString().padStart(2, "0")} ${year}`;
}

setInterval(currentTime, 100);
setInterval(currentDate, 1000);

