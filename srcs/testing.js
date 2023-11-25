let newDate = new Date();
let mins = newDate.getMinutes();
console.log(mins);

if(mins === 6){
    console.log("This is true.");
}
else{
    console.log('This is false')
};

let testingTime = () => {
    if(mins === 10){
        console.log("This is true. the current second is 10");
    }
    else{
        console.log('This is false')
    };
    return 
}

// setInterval(testingTime, 10000);