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
