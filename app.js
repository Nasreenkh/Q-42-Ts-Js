"use strict";
// Define an array of magician's names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Function to show magicians
function show_magicians(magicians) {
    console.log("List of Magicians:");
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Call the make_great function to modify the array of magicians
make_great(magicians);
// Call the show_magicians function to see the modified list
show_magicians(magicians);
