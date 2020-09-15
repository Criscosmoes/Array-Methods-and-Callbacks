import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
fifaData.forEach(cur => {
    if(cur.Year === 2014 && cur.Stage === "Final"){
        console.log(cur["Home Team Name"]); 
    }
})

fifaData.forEach(cur => {
    if(cur.Year === 2014 && cur.Stage === "Final"){
        console.log(cur["Away Team Name"]); 
    }
})

fifaData.forEach(cur => {
    if(cur.Year === 2014 && cur.Stage === "Final"){
        console.log(cur["Home Team Goals"]); 
    }
})

fifaData.forEach(cur => {
    if(cur.Year === 2014 && cur.Stage === "Final"){
        console.log(cur["Away Team Goals"]); 
    }
})

fifaData.forEach(cur => {
    if(cur.Year === 2014 && cur.Stage === "Final"){
        console.log(cur["Win conditions"]); 
    }
})




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    let final = fifaData.filter(cur => cur.Stage === "Final"); 


    return final; 

};


console.log(getFinals(fifaData)); 

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {

    let years = cb.map(cur => cur.Year);  

    return years; 

};

console.log(getYears(getFinals(fifaData))); 

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {

    let winners = []; 
    

    for (let cur of cb){

        if(cur["Away Team Goals"] > cur["Home Team Goals"]){
            winners.push(cur["Away Team Name"]); 
        }
        else if(cur["Home Team Goals"] > cur["Away Team Goals"]){
            winners.push(cur["Home Team Name"]); 
        }
        else if(cur["Away Team Goals"] === cur["Home Team Goals"]){


            if(cur["Win conditions"].includes(cur["Away Team Name"])){
                winners.push(cur["Away Team Name"]); 
            }
            else {
                winners.push(cur["Home Team Name"])
            }
        }


    }


    return winners; 

};

console.log(getWinners(getFinals(fifaData))); 

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {


for(let i = 0; i < cb1.length; i++){
    console.log(`In ${cb2[i]}, ${cb1[i]} won the world cup!`)
}




};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))) 





/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {


    let sum = data.reduce((accum, item) => accum + item["Away Team Goals"] + item["Home Team Goals"], 0); 

    return Math.floor((sum / data.length)); 

};

console.log(getAverageGoals(fifaData)); 

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
