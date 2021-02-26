// enum StarbucksGrade {
//     WELCOME,
//     GREEN,
//     GOLD
// }

enum StarbucksGrade {
    WELCOME = "WELCOME",
    GREEN = "GREEN",
    GOLD = "GOLD"
}

function getDiscount(v: StarbucksGrade): number {
    switch(v) {
        case StarbucksGrade.WELCOME:
            return 0
        case StarbucksGrade.GREEN:
            return 5
        case StarbucksGrade.GOLD:
            return 10
    }
}

const discount: number = getDiscount(StarbucksGrade["GOLD"])
console.log(discount)
// console.log(StarbucksGrade["0"]) //WELCOME
// console.log(StarbucksGrade[0])

console.log(StarbucksGrade.GREEN == "GREEN") //true
console.log(StarbucksGrade["GREEN"]) // GREEN