import { fileCheck, saveContact } from "./filehandle.js";

export function listContact() {
    const contacts = fileCheck();
    console.log('\n------Contack List----------')
    if (contacts.length === 0) {
        console.log('NO CONTACT')
    } else {
        contacts.forEach((c, index) => {
            console.log(`${index + 1}. Name:${c.name} | Phone: ${c.phone}`)
        })
    }
    console.log('-----------------')
}

export function addContact (name , phone) {
    const contacts = fileCheck();
    contacts.push({name: name.trim(), phone: phone.trim() });
    saveContact(contacts)
}