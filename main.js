"use strict";
// Question no 25. Alien Colors #1:
//  Imagine an alien was just shot down in a game. Create a variable called
// alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the
// player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that
// fails will have no output.)
// passed version of Green alien colour
let alien_color = ("Green");
if (alien_color == "Green") {
    console.log("you just earn 5 points ");
}
;
// Fail version 
alien_color = ("Yellow");
if (alien_color == "Green") {
    console.log("you just earn 5 points ");
    // no out because condition is false
}
;
// // Green Alien version
// let alien_color = ("Green");
// if (alien_color =="Green"){
//     console.log("you earned 5 points");
// }else if(alien_color == "Yellow"){
//     console.log("you earned 10 points");
// }else if (alien_color == "Red"){
//     console.log("you earned 15 points");
// };
// // Yellow Alien version
//  alien_color = ("Yellow");
// if (alien_color =="Green"){
//     console.log("you earned 5 points");
// }else if(alien_color == "Yellow"){
//     console.log("you earned 10 points");
// }else if (alien_color == "Red"){
//     console.log("you earned 15 points");
// };
// // Red Alien version
//  alien_color = ("Red");
// if (alien_color =="Green"){
//     console.log("you earned 5 points");
// }else if(alien_color == "Yellow"){
//     console.log("you earned 10 points");
// }else if (alien_color == "Red"){
//     console.log("you earned 15 points");
// };
