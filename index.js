// Code your solution in this file!
const returnFirstTwoDrivers = function () {
    const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return drivers.slice(0, 2);
    }
    returnFirstTwoDrivers();
const returnLastTwoDrivers = function () {
    const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return drivers.slice(2,4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];




const createFareMultiplier = function (multiply) {
    return function (value) {
        return multiply * value;
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversReturn) {
    return driversReturn(drivers);
}
