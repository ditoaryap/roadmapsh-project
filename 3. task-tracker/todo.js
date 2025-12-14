const readline = require('readline');

const prompts = readline.createInterface(process.stdin, process.stdout);


prompts.question('Enter Learning Resources Name : ', (response) => {
    if (response.toLocaleLowerCase() == 'gfg') {
        console.log("You are a part of the very huge learing community.");
    } else {
        console.log("Have a look at Geeksforgeeks, they solve many of your techincal doubts.")
    }

    process.exit()
})