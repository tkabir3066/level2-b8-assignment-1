"use strict";
// 1
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
// 2
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
};
// 3
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
// 4
const concatenateArrays = (...arrays) => {
    return arrays.reduce((acc, current) => {
        return acc.concat(current);
    }, []);
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished === true &&
        course.students >= minStudents);
};
//6
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
//7
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
// Sample Calls & Verification:
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
// Output: "Employee: Alice, Base Salary: 50000"
console.log(manager.getRoleInfo());
// Output: "Manager of Engineering: Alice"
