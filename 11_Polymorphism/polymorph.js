// Polymorphism
// Poly -> Multi 
// Morphic -> Forms or shapes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
In the world of object oriented programming if we have a class person that
is extended by Student, Employee and Trainer, we can hold on to the child
class objects using the parent class variable. so the person variable p of Person
type can hold on to a Student Object, it can hold on to an Employee object and
it can hold on to a Triner Object.
 */
/**
Example: If we have a Person class which is extended by Student, Employee, Trainer.

We can hold on child class object using parent class variables

p:Person = new Student()     work()
       p = new Employee()    work()
       p = new Trainer()     work()

 */
// Parent class 
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.print = function () {
        console.log("EmployeeID: ".concat(this.employeeId));
    };
    return Employee;
}());
// Child class that extends the employee class 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, designation, employeeId) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        _this.employeeId = employeeId;
        return _this;
    }
    // Override the print method of the parent class 
    Manager.prototype.print = function () {
        _super.prototype.print.call(this); // Will invoke the super class print method
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Manager;
}(Employee));
var Lead = /** @class */ (function (_super) {
    __extends(Lead, _super);
    function Lead(firstName, lastName, designation, employeeId) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        _this.employeeId = employeeId;
        return _this;
    }
    Lead.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Lead;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, designation, employeeId) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        _this.employeeId = employeeId;
        return _this;
    }
    Developer.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Developer;
}(Employee));
var employees = new Array(new Manager("John", "Cena", "Manger", "1234"), new Lead("Jitu", "Rao", "Lead", "3445"), new Developer("Minku", "Rao", "Developer", "2828"));
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    employee.print();
}
var NewEmployee = /** @class */ (function () {
    function NewEmployee() {
    }
    // Method of the class 
    NewEmployee.prototype.print = function () {
        console.log("Employee Details");
    };
    return NewEmployee;
}());
var NewLead = /** @class */ (function (_super) {
    __extends(NewLead, _super);
    // This class extends from the parent class NewEmployee
    // It has its own print method
    // constructor 
    function NewLead(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    NewLead.prototype.print = function () {
        // invokes the parent class print method
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return NewLead;
}(NewEmployee));
var NewDeveloper = /** @class */ (function (_super) {
    __extends(NewDeveloper, _super);
    // This class extends from the parent class NewEmployee
    // It has its own print method
    // constructor 
    function NewDeveloper(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    NewDeveloper.prototype.print = function () {
        // invokes the parent class print method
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return NewDeveloper;
}(NewEmployee));
var NewManager = /** @class */ (function (_super) {
    __extends(NewManager, _super);
    // This class extends from the parent class NewEmployee
    // It has its own print method
    // constructor 
    function NewManager(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    NewManager.prototype.print = function () {
        // invokes the parent class print method
        _super.prototype.print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return NewManager;
}(NewEmployee));
// Instance of a classes 
// Here we are creating an arrary of the parent class i.e. NewEmployee and adding details from the child classes.
// The parent type can point to any of the child type dynamically. This is what polymorphism is. 
var newemployees = new Array(new NewManager("Jeremy", "Jackson", "Manager"), new NewLead("Pallavi", "Bhave", "Lead"), new NewDeveloper("gary", "391", "Developer"));
for (var _a = 0, newemployees_1 = newemployees; _a < newemployees_1.length; _a++) {
    var newemployee = newemployees_1[_a];
    newemployee.print();
}
