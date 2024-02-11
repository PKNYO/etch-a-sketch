const gridContainer = document.querySelector(".grid-container")
const buttonsContainer = document.querySelector(".button-container")
const changeButton = document.querySelector(".change-button")
const resetButton = document.querySelector(".reset-button")

let gridSize = 16

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const row = document.createElement("div")
    
        row.classList.add("row")
        gridContainer.appendChild(row)
    
        for (let j = 1; j <= size; j++) {
            const square = document.createElement("div")
    
            square.classList.add("square")
            row.appendChild(square)
    
            square.addEventListener("mouseover", (e) => {
                e.target.classList.add("hover")
            })
        }
    }
}

createGrid(gridSize)

resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.classList.remove("hover")
    })
})

changeButton.addEventListener("click", () => {
    gridSize = prompt("Give a size between 5 and 100.")
    
    if (gridSize > 100 || gridSize < 5) {
        return alert("Give a number between 5 and 100.")
    }

    gridContainer.innerHTML = ""

    createGrid(gridSize)
})

