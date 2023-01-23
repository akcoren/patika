function createTable() {
    // const createP = document.createElement('p')
    // const createUl = document.createElement('ul')
    // const createLi = document.createElement('li')
    const createTa = document.createElement('table')
    const createTh1 = document.createElement('th')
    const createTh2 = document.createElement('th')
    // document.querySelector(`#tableDiv`).appendChild(createUl).appendChild(createLi)
    console.log(document.querySelector(`#rowNumber`).attributes.value['value'])
    const rowNumber = document.querySelector(`#rowNumber`).attributes.value['value'];
    const rowNumber1 = document.querySelector(`#rowNumber`).value;
    console.log(rowNumber)
    console.log(document.querySelector(`#rowNumber`))
    var table = document.querySelector(`#tableDiv`).appendChild(createTa)
    table.style.border = '1px solid black'


    // var thead = table.createTHead();
    // var row = thead.insertRow(0)
    // var cell1 = row.insertCell(0)
    // var cell2 = row.insertCell(0)

    // var cell1 = row.appendChild(createTh1)
    // var cell2 = row.appendChild(createTh2)
    // cell1.innerHTML = '<b>TH CELL1 HERE</b>'
    // cell2.innerHTML = '<b>TH CELL2 HERE</b>'


    var table = document.querySelector(`#tableDiv`).appendChild(createTa)

    let m = 0
    for (let index = 0; index < rowNumber1; index++) {
        var row = table.insertRow(-1)
        // row.style.border = "1px solid black"
        for (let index1 = 0; index1 < 3; index1++) {
            m = m + 1
            var cell = row.insertCell(-1)
            const textBox = document.createElement('input')
            textBox.id = `textBoxId${m}`
            textBox.classList.add('zurnaci')
            textBox.value = m

            cell.id = `cellId${m}`
            cell.style.border = "1px solid black"

            cell.appendChild(textBox)
        }
    }
    table.style.border = '1px solid black'

}




// small callback function example
function greeting(name) {
    alert(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
}

processUserInput(greeting);
