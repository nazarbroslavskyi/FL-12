function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function solutOfQuadratEquat() {
	const a = prompt('Please enter a', '');
	const b = prompt('Please enter b', '');
	const c = prompt('Please enter c', '');
	let x1, x2, ValueOFDisc, x;
    const number = 4;
    const numberOfTwo = 2;
	if(isNumber(a) && isNumber(b) && isNumber(c) && +a !== 0) {
		ValueOFDisc = b * b - number * a * c;
	} else {
		return 'Invalid input data';
	}

	if(ValueOFDisc > 0) {
		x1 = (-b + Math.sqrt(ValueOFDisc)) / (numberOfTwo * a);
		x2 = (-b - Math.sqrt(ValueOFDisc)) / (numberOfTwo * a);
		return 'x1 = ' + x1 + '\n' + 'x2 = ' + x2;
	} else if(ValueOFDisc === 0) {
		x = -b / (numberOfTwo * a);
		return 'x = ' + x;
	} else if(ValueOFDisc < 0) {
		return 'no solution';
	}
}

alert(solutOfQuadratEquat());
