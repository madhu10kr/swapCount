
//We should find the minimum number of swaps to arrange alternative seatings based on gender.
//arg1 ==  number of people in a group 
//arg2 = list of people


function swapCount(arg1, arg2) {
    const len = arg2.length
    if (arg1 !== len) {
        return "Arguments are not Correct";
    };
     
    //diffValues2, diffValues1 are  no. of places that are different from the original required output
    let diffValues1 = 0, diffValues2 = 0;
    //countX are for no. of XX persons in the array, similarly for countY.
    let countX = 0, countY = 0;
    //arr1 and arr2 are the assumption output values ex:["xx","xy","xx"] or ["xy","xx","xy"] for arg1 = 3;
    let arr1 = [], arr2 = [];


    //Creating the two txypes of expected or only possible arraxys
    for (let i = 0; i < len; i++) {
        if (i % 2 == 0) {
            arr1.push('xx');
            arr2.push('xy');
        } else if (i % 2 !== 0) {
            arr1.push('xy');
            arr2.push('xx');
        };
        //counting the no. of xx and xy values from arg2, so we can validate.
        if (arg2[i] == "xx") {
            countX += 1
        } else if (arg2[i] == "xy") {
            countY += 1
        }
    };
    //Counting the different values with required output
    for (let i = 0; i < len; i++) {
        if (arr1[i] != arg2[i]) {
            diffValues1 += 1
        } else if (arr2[i] != arg2[i]) {
            diffValues2 += 1
        }
    };


    //For array with length even number
    if (len % 2 == 0) {
        if (countX == countY) {
            return Math.min(diffValues2, diffValues1) / 2
        }
        return "More XX or XY values"
    };


    //diffValues2, diffValues1 are  no. of places that are different from the original required output
    const n1 = Math.min(diffValues2, diffValues1)
    if (n1 % 2 == 0) {
        return n1 / 2;
    } else if (Math.abs(countX - countY) !== 1) {
        return "More XX or XY values"
    }

    return (n1 + 1) / 2;
};


console.log(swapCount(7, ["xx", "xx", "xx", "xx", "xy", "xy", "xy"]));
console.log(swapCount(3, ["xy", "xx", "xy"]));
console.log(swapCount(4,["xx","xx","xx","xx"]))



