import readline from 'readline'
import { listContact, addContact } from './contact.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    console.log('1. View Contacts'),
        console.log('2. Add Contact'),
        console.log('3. Exit')

    rl.question('Choose an Option (1-3)', (choice) => {
        if (choice === '1') {
            listContact()
            mainMenu()
        }
        else if (choice === '2') {
            addContactPromp()
        }
        else if (choice === '3') {
            console.log('BYE----BYE')
            rl.close()
        } else {
            console.log('invalid')
            mainMenu()
        }
    })
}

function addContactPromp() {
    rl.question('Enter name:', (name) => {
        if (name.trim() === '') return mainMenu()
        rl.question('Enter phone:', (phone) => {
            if(phone.trim()==='') return mainMenu()
            addContact(name, phone);
            console.log(`Contact save ${name}`);
            mainMenu()
        })
    })
}

console.log('---- WELCOME TO CONTACT')
mainMenu();