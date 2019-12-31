const makeNumber = str => str.split('').filter(el => isFinite(el) && el !== ' ').join('');

console.log(makeNumber('erer384jjjfd123')) //=>384123
makeNumber('123098h76gfdd'); //=>12309876
makeNumber('ijifjgdj'); //=> should return empty string ->''

