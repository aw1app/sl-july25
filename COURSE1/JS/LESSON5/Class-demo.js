class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    detail() {
        console.log(this.id + " " + this.name + "<br>")
    }

}


var e1 = new Employee(101, "Michael");
var e2 = new Employee(102, "Bob");

e1.detail();


class Manager extends Employee{

    constructor(id, name, dept) {
        super(id, name);
        this.dept = dept;
    }

    detail() {
        console.log(this.id + " " + this.name +  " " + this.dept)
    }

}

var m1 = new Manager(111, "Michael Jr", "Science");
m1.detail();