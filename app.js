const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileName = 'contact-json'

function checkContact() {
    if (!fs.existsSync(fileName)) return [];
    const dataRead = fs.readFileSync(fileName, 'utf8')
    if (dataRead.trim() === '') return [];
    return JSON.parse(dataRead);
}

function saveContact(contact) {
    fs.writeFileSync(fileName, JSON.stringify(contact, null, 2))
}

function listContact() {
    const contacts = checkContact();
    console.log('\n---Contacct list----')
    if (contacts.length === 0) {
        console.log('No contact')
    } else {
        contacts.forEach((c, index) => {
            console.log(`${index + 1}. Name: ${c.name} | phone:${c.phone}`)
        })
    }
    console.log('-----------\n')
}

function mainMenu() {
    console.log('1. view contact')
    console.log('2. add contact');
    console.log('3. exit');

    rl.question('Choose an option (1-3)', (chose) => {
        if (chose === '1') {
            listContact()
            mainMenu();
        } else if (chose === '2') {
            addContactPromp()
        } else if (chose === '3') {
            console.log('BYE BYE')
            rl.close();
        } else {
            console.log('Invalid choise.\n')
            mainMenu()
        }
    });
}

function addContactPromp() {
    rl.question('Enter name', (name) => {
        if (name.trim() === '') {
            console.log('Cant be empty\n');
            return mainMenu();
        }
        rl.question('Enter Phone', (phone) => {
            if (phone.trim() === '') {
                console.log('Number Empty\n')
                return mainMenu()
            } else {
                const contacts = checkContact()

                contacts.push({
                    name: name.trim(),
                    phone: phone.trim()
                })

                saveContact(contacts)
                console.log(`Contact save ${name}\n`)
                mainMenu()
            }

        })
    })
}

console.log('---- Welcome-----')
mainMenu();