const makeNumber = str => str.split('').filter(el => isFinite(el) && el !== ' ').join('');


const countNumbers = str => {
    const numbers = makeNumber(str);
    const countNumbers = {};
    for(let i = 0; i < numbers.length; i++) {
        countNumbers[numbers[i]] = countNumbers[numbers[i]] ? countNumbers[numbers[i]] += 1 : 1;
    }

    return countNumbers;
}

countNumbers('erer384jj4444666888jfd123');
// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
countNumbers('jdjjka000466588kkkfs662555');
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
countNumbers(''); // => {}