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
