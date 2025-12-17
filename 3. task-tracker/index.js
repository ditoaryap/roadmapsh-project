import { addTodo } from './todo.services.js'

import { input, select } from "@inquirer/prompts";

async function mainMenu() {
    const answer = await select({
        message: "Pilih",
        choices: ['add', 'update', 'delete', 'mark', 'list', 'exit']
    })

    switch (answer) {
        case "add":
            console.log("you choose add")
            await addTodo()
            break
        case "update":
            console.log("TEST NIH YE");
            break;
        case "exit":
            console.log('thx brok')
            process.exit()
        default:
            console.log("CABUT")
            break
    }

    mainMenu()
}

mainMenu()