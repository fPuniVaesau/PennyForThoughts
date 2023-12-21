let quoteForTheDay = document.querySelector(".quoteOfTheDay");

let randomNumberGenerator = () => {
    let randomNum = Math.floor(Math.random()*7-1);
    return randomNum;
};

let QuotesOFtheWeek = [
    "Rivers know this, there is no hurry. We shall get there some day.",

    "I'm a greater believer in luck, and I find the harder I work the more I have of it",

    "...talent means nothing, while experience, acquired in humility and with hard work, means everything.",

    "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.",

    "Learning is not child's play; we cannot learn without pain.",

    "Wise men speak when they have something to say, fools speak because they have to say something",

    "Man is a goal-seeking animal. His life only has meaning if he is reaching out and striving for his goals."
];


let changeQuote = (callbackFn) => {
    
    let getNum = callbackFn();

    if(getNum === 1){
        quoteForTheDay.innerHTML = QuotesOFtheWeek[1];
    }
    else if(getNum === 2){
        quoteForTheDay.innerHTML = QuotesOFtheWeek[2];
    }
    else if(getNum === 3){
        quoteForTheDay.innerHTML = QuotesOFtheWeek[3];
    }
    else if(getNum === 4){
        quoteForTheDay.innerHTML = QuotesOFtheWeek[4];
    }
    else if(getNum === 5){
        quoteForTheDay.innerHTML = QuotesOFtheWeek[5];
    }
    else if(getNum === 6){
        quoteForTheDay.innerHTML = QuotesOFtheWeek[6];
    }
    else if(getNum === 7){
        quoteForTheDay.innerHTML = QuotesOFtheWeek[7];
    }
    else{
        "There is an error";
    }

    return 

}

// changeQuote(randomNumberGenerator);

setInterval(changeQuote, 300000, randomNumberGenerator);

//Make sure to code out a way to change the author to the the corresponding author.

//Look to create an object that holds the author and the quote and refactor the code to fetch the data from the objects using dot notation. 
//      => Example of dot notation: example.name, exapmple.quote