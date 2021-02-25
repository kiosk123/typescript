var score1 = 0
let score2 = 200

function outer() {
    if (true) {
        var score = 0
    }
    console.log(score)

    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i)
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