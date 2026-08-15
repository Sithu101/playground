const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const today = new Date().toISOString().split('T')[0]
const flineName = `journal-${today}.txt`;

console.log(`welcome to journal![Date:${today}]`);

rl.question('Write your journal \n>', (entry) => {
    if (entry.trim() === '') {
        console.log('cant be empty');
        rl.close();
        return;
    }

    const logTime = new Date().toLocaleDateString();
    const contentTosave = `n[${logTime}] ${entry}\n------------------`;

    fs.appendFileSync(flineName, contentTosave);

    console.log(`saved to"${flineName}"!`);
    rl.close();
})