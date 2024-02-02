var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setEmployee = function (name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    };
    Employee.prototype.printDetails = function () {
        console.log(this.name, this.department, this.salary);
    };
    return Employee;
}());
var obj1 = new Employee();
obj1.setEmployee("akash", "hr", 25000);
obj1.printDetails();
