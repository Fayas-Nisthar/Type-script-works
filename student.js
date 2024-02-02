var Students = /** @class */ (function () {
    function Students(rollno, name, course) {
        this.rollno = rollno;
        this.name = name;
        this.course = course;
    }
    Students.prototype.printDetails = function () {
        console.log(this.rollno, this.name, this.course);
    };
    return Students;
}());
var st = new Students(10, "Fayas", "Django");
st.printDetails();
