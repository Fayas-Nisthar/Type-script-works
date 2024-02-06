var Django = /** @class */ (function () {
    function Django(name, architecture) {
        this.name = name;
        this.architecture = architecture;
    }
    Django.prototype.roadMap = function () {
        console.log(this.name, "is a", this.architecture);
    };
    return Django;
}());
var Angular = /** @class */ (function () {
    function Angular(name, architecture) {
        this.name = name;
        this.architecture = architecture;
    }
    Angular.prototype.roadMap = function () {
        console.log(this.name, "is a", this.architecture, "framework");
    };
    return Angular;
}());
var Student = /** @class */ (function () {
    function Student(framework) {
        this.frameworkObject = framework;
    }
    Student.prototype.learn = function () {
        this.frameworkObject.roadMap();
    };
    return Student;
}());
var djangoObject = new Django("django", "mvt");
var studentObj = new Student(djangoObject);
studentObj.learn();
