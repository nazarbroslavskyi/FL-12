function isBigger(numOne, numTwo) {
	return numOne > numTwo;
}

function isSmaller(valOne, valTwo) {
	return !isBigger(valOne, valTwo);
}

console.log(isSmaller(5, -1))