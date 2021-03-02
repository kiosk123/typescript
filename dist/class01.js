var Cart = (function () {
    function Cart(user, store) {
        if (store === void 0) { store = {}; }
        this.user = user;
        this.store = store;
    }
    Cart.prototype.put = function (id, product) {
        this.user;
        this.store[id] = product;
    };
    Cart.prototype.get = function (id) {
        return this.store[id];
    };
    return Cart;
}());
var cart = new Cart({ name: "John" });
//# sourceMappingURL=class01.js.map