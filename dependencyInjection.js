var PassionPro = /** @class */ (function () {
    function PassionPro(name) {
        this.name = name;
    }
    PassionPro.prototype.drive = function () {
        console.log(this.name, " starts method");
    };
    return PassionPro;
}());
var Hunter = /** @class */ (function () {
    function Hunter(name) {
        this.name = name;
    }
    Hunter.prototype.drive = function () {
        console.log(this.name, " starts method");
    };
    return Hunter;
}());
var Person = /** @class */ (function () {
    function Person(vehicle) {
        this.vehicleObject = vehicle;
    }
    Person.prototype.ride = function () {
        this.vehicleObject.drive();
    };
    return Person;
}());
var hunterObject = new Hunter("hunter");
var personObject = new Person(hunterObject);
personObject.ride();
