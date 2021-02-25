var score1 = 0 // var is function scope
let score2 = 200 // let is block scope

function outer() {
    if (true) {
        var score = 0
    }
    console.log(score)

    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i) // print only 3
        }, 100)
    }
}

outer()

let score3:number //permit only number type
score3 = 10
console.log(score3)

let anytype //any type
anytype = "anytype"
console.log(anytype)

const value: number = 50 //define const type variable