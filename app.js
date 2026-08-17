const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileName = 'todo.txt'

function showTodo() {
    console.log('\n---Todo List ----')

    if (fs.existsSync(fileName)) {
        const data = fs.readFileSync(fileName, 'utf8')

        if (data.trim() === '') {
            console.log('No data yet')
        } else {
            console.log(data)
        }
    } else {s
        console.log('no todo file')
    }
    console.log('--------\n')
}

function Todo() {
    rl.question('Enter to do ', (task) => {
        if (task.toLowerCase() === 'exit') {
            console.log('bye bye')
            rl.close()
            return;
        }

        if (task.trim() === '') {
            console.log('no empty space')
            Todo();
            return;
        }
        fs.appendFileSync(fileName, `-${task}\n`)
        console.log(`added:"${task}"`)
        showTodo()
        Todo()
    })
}

showTodo()
Todo()