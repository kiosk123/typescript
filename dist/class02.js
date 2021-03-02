var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Korean = (function () {
    function Korean(name) {
        this.name = name;
    }
    Korean.prototype.say = function (message) {
        console.log(message);
    };
    return Korean;
}());
var KoreanProgrammer = (function (_super) {
    __extends(KoreanProgrammer, _super);
    function KoreanProgrammer(name, jumin) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.jumin = jumin;
        return _this;
    }
    KoreanProgrammer.prototype.writeCode = function (requirement) {
        console.log(requirement);
        return requirement + '.........';
    };
    KoreanProgrammer.prototype.say = function (message) {
        console.log(message);
    };
    KoreanProgrammer.prototype.loveKimchi = function () {
        console.log('love~ kimchi');
    };
    return KoreanProgrammer;
}(Korean));
var jay = new KoreanProgrammer('jay', 2222);
//# sourceMappingURL=class02.js.map