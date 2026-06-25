const board = document.querySelector("#board")
let boxes = document.querySelectorAll(".cell")
let status = document.querySelector("#status")
const reset = document.querySelector("#resetBtn")
const grid = ["", "", "", "", "", "", "", "", ""]


let totalInsert = 0

let winner = false

function checkWinner(player) {
    if (grid[0] == player && grid[1] == player && grid[2] == player) return true
    else if (grid[3] == player && grid[4] == player && grid[5] == player) return true
    else if (grid[6] == player && grid[7] == player && grid[8] == player) return true
    else if (grid[0] == player && grid[3] == player && grid[6] == player) return true
    else if (grid[1] == player && grid[4] == player && grid[7] == player) return true
    else if (grid[2] == player && grid[5] == player && grid[8] == player) return true
    else if (grid[0] == player && grid[4] == player && grid[8] == player) return true
    else if (grid[2] == player && grid[4] == player && grid[6] == player) return true
    else false
}

let turn = "X"

board.addEventListener("click", function (e) {
    const board = e.target
    let index = board.id

    if (winner || grid[index] != "")
        return


    board.textContent = turn


    grid[index] = turn

    totalInsert++

    if (checkWinner(turn)) {
        status.textContent = `Player ${turn} won the game !`
        winner = true
        return
    }

    if (totalInsert > 8) {
        status.textContent = "Draw"
        return
    }

    if (turn == 'X') {
        turn = 'O'
        status.textContent = `Player ${turn}'s turn`
    }
    else {
        turn = 'X'
        status.textContent = `Player ${turn}'s turn`
    }

})

reset.addEventListener("click", function () {
    boxes.forEach(box => box.textContent = "")
    for (let i = 0; i < grid.length; i++) {
        grid[i] = ""
    }
    totalInsert = 0
    winner = false
    turn = "X"
    status.textContent = "Player X's turn"
})