import { input, select } from "@inquirer/prompts";
import fs from "fs/promises";

const fileTodos = "./todo.json"

// Parsing JSON
// const todos = JSON.parse(fs.readFile(file, "utf-8"))

// data load
async function loadData() {
    const data = await fs.readFile(file, "utf-8")
    return JSON.parse(data)
}

// save data (kirim data ke json)
async function saveData(data) {
    await fs.writeFile(fileTodos, JSON.stringify(data, null, 2))
}

