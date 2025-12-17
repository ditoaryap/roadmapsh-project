import fs from 'fs/promises'

// data load
async function loadData() {
    const data = await fs.readFile(file, "utf-8")
    return JSON.parse(data)
}

// save data (kirim data ke json)
async function saveData(data) {
    await fs.writeFile(fileTodos, JSON.stringify(data, null, 2))
}

export {
    loadData,
    saveData
}