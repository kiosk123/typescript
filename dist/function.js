function add(x, y) {
    return x + y;
}
var result = add(1, 2);
function buildUserInfo(name, email) {
    if (name === void 0) { name = "-"; }
    return { name: name, email: email };
}
var user = buildUserInfo("hello", "@naver.com");
var add2 = function (a, b) { return a + b; };
var result2 = add2(1, 2);
function store(type) {
    if (type == "통조림") {
        return { a: "통조림" };
    }
    else if (type == "아이스크림") {
        return { b: "아이스크림" };
    }
    else {
        throw new Error("Unsupported Type");
    }
}
var s = store("통조림");
console.log(s.a);
//# sourceMappingURL=function.js.map