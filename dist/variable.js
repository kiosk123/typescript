var score1 = 0;
var score2 = 200;
function outer() {
    if (true) {
        var score = 0;
    }
    console.log(score);
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
}
outer();
var score3;
score3 = 10;
console.log(score3);
var anytype;
anytype = "anytype";
console.log(anytype);
var value = 50;
//# sourceMappingURL=variable.js.map