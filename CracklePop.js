/* Prompt is to write a program that writes integers from 1 to 100
/* numbers divisible by 3 should be replaced with 'Crackle'
/* numbers divisible by 5 should be replaced with 'Pop'
/* numbers divisible by 15 should be replaced with 'CracklePop' */

function cracklePop() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("CracklePop");
        }
        if (i % 3 == 0) {
            console.log("Crackle");
        }
        if (i % 5 == 0) {
            console.log("Pop");
        }
        else {
            console.log(i);
        }
    }}

cracklePop();