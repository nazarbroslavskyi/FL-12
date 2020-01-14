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