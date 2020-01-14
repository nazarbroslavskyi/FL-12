function convert(...args) {

    for(let i = 0; i < args.length; i++) {
        if(typeof args[i] === 'string') {
            args[i] = +args[i]
        } else {
            args[i] = args[i] + '';
        }
    }
    return args;
}


// convert('1', 2, 3, '4');

function executeforEach(arr, func) {
    arr.forEach((elem) => {
        func(elem);
    });
}

// executeforEach([1,2,3], function(el) {console.log(el * 2)}) 

function mapArray(array, myFunc) {
    const newArr = [];
    executeforEach(array, (elem) => {
        newArr.push(myFunc(+elem));
    })
    return newArr;
}

// mapArray([2, '5', 8], function(el) {return el + 3}) 


function filterArray(array, filterFunc) {
    let result = [];

    executeforEach(array, function(el) {
        if (filterFunc(el)) {
            result.push(el);
        }
    });
    return result;
}

// filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) 

function flipOver(string) {
    let reverseString = '';

    for (let letter of string) {
        reverseString = letter + reverseString;
    }
    return reverseString;
}

// flipOver('hey world') // 'dlrow yeh'

function makeListFromRange(array) {
    const rangeOfNumbers = [];

    for(let i = array[0]; i <= array[1]; i++) {
        rangeOfNumbers.push(i);
    }
    return rangeOfNumbers;
}

// makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]

function getArrayOfKeys(objects, key) {
    let arrayOfKeys = [];

    executeforEach(objects, function(el) {
        arrayOfKeys.push(el[key]);
    });

    console.log(arrayOfKeys);
    return arrayOfKeys;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
  
// getArrayOfKeys(actors, 'name');

const limit = 30;

function substitute(array) {
    return mapArray(array, function(el) {
        el = el < limit ? '*' : el;
        return el;
    });
}

// substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']