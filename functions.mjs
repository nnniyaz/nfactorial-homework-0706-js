function pushFunc(arr, element) {
    return arr.push(element);
}

const shiftFunc = (arr) => {
    arr.shift();
}

const popFunc = function (arr) {
    arr.pop();
}

const unShiftFunc = (arr, ...elements) => arr.unshift(...elements);

export { pushFunc, shiftFunc, popFunc, unShiftFunc };
