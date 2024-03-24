// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations")

// Funções
const createTable = (multiplicationNumber, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""

    for (i = 1; i <= multiplicatorNumber; i++) {

        const result = multiplicationNumber * i

        const template = `<div class="row">
            <div class="operation">${multiplicationNumber} x ${i} = </div>
            <div class="result">${result}</div>
            </div>`

        const parser = new DOMParser()

        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerText = multiplicationNumber
}

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault() //quando apertado para calcular a página não atualizar.

    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicatorNumber) {
        window.alert("Insira valores para ter o resultado...") // caso não tenha valores inseridos será mostrado isso na tela.
    }
    createTable(multiplicationNumber, multiplicatorNumber)
})