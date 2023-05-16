"use strict";
const numsArr = [1, 2, 3];
function addNums(numsArr) {
    return numsArr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}
console.log(addNums(numsArr));
