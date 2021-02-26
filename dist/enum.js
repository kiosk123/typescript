var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade["WELCOME"] = "WELCOME";
    StarbucksGrade["GREEN"] = "GREEN";
    StarbucksGrade["GOLD"] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
var discount = getDiscount(StarbucksGrade.GOLD);
console.log(discount);
console.log(StarbucksGrade.GREEN == "GREEN");
console.log(StarbucksGrade["GREEN"]);
//# sourceMappingURL=enum.js.map