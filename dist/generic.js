function createPromise(x, timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(x);
        }, timeout);
    });
}
createPromise("1", 100).then(function (v) { return console.log(v.toUpperCase()); });
function createTuple(v, u) {
    return [v, u];
}
var t1 = createTuple("user1", 23);
console.log(t1[0].toUpperCase() + " : " + t1[1]);
var LocalDB = (function () {
    function LocalDB(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    LocalDB.prototype.add = function (v) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    };
    LocalDB.prototype.get = function () {
        var v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    };
    return LocalDB;
}());
var userdb = new LocalDB('user');
userdb.add({ name: 'jay' });
var userA = userdb.get();
userA.name;
var D = (function () {
    function D() {
    }
    D.prototype.add = function (v) {
        throw new Error("Method not implemented.");
    };
    D.prototype.get = function () {
        throw new Error("Method not implemented.");
    };
    return D;
}());
var JsonDB = (function () {
    function JsonDB() {
    }
    JsonDB.prototype.add = function (v) {
        throw new Error("Method not implemented.");
    };
    JsonDB.prototype.get = function () {
        throw new Error("Method not implemented.");
    };
    return JsonDB;
}());
var cart1 = {
    getItem: function () {
        return { m: '' };
    }
};
cart1.getItem();
//# sourceMappingURL=generic.js.map