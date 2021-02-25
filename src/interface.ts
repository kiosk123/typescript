interface TV {
    turnOn(): boolean
    turnOff(): void
}

const myTV: TV = {
    turnOn: function() {
        return true;
    },
    turnOff: function() {

    }
}

function tryTurnOn(tv: TV) {
    tv.turnOn()
}

tryTurnOn(myTV)

// 인터페이스는 어떤 데이터가 필요한지 정의할 수도 있음
interface Cell {
    row: number
    col: number
    piece?: Piece; //piece 속성은 있을 수도 없을 수도 있기 때문에 ?를 이용하여 선언
}

interface Piece {
    move(from: Cell, to: Cell): boolean
}

const createBoard = () => {
    const cells: Cell[] = []
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({ row, col }) // { row: row, col: col} in es6
        }
    }
}

const board = createBoard()
board[0].piece = {
    move(from: Cell, to: Cell) {
        return true
    }
}