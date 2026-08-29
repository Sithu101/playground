import fs from 'fs'

const fileName = 'contact-json';

export function fileCheck() {
    if (!fs.existsSync(fileName)) return [];
    const dataBuffer = fs.readFileSync(fileName, 'utf8');
    if (dataBuffer.trim() === '') return []
    return JSON.parse(dataBuffer)
}

export function saveContact(contacts) {
    fs.writeFileSync(fileName, JSON.stringify(contacts, null, 2))
}