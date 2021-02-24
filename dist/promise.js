var hello = "hello";
var hello2 = "hello2";
var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("1 sec");
    }, 1000);
});
timeoutPromise.then(console.log);
import add from './util';
var value = add(1, 2);
console.log(value);
//# sourceMappingURL=promise.js.map