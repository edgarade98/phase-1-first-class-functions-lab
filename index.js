// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
    return drivers.slice (0, 2);

    console.log(drivers);
}

const returnLastTwoDrivers = function (drivers) {
    const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
    return drivers. slice (-2);

    console.log (drivers);
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];


function createFareMultiplier(multiply) {
    return function (fare) {
        return fare * multiply;
    };
}

function fareDoubler(double) {
    return 2 * double;
}

function fareTripler(triple) {
    return 3 * triple;
}

function selectDifferentDrivers(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
  }
