let firstSide = parseFloat(+prompt('Enter first side of triangle ',''));
let secondSide = parseFloat(+prompt('Enter second side of triangle ',''));
let thirdSide = parseFloat(+prompt('Enter third side of triangle ',''));

if(firstSide <= 0 || secondSide <= 0 || thirdSide <= 0) {

    console.log('Triangle doesn’t exist');
} else if(firstSide + secondSide > thirdSide
    && secondSide + thirdSide > firstSide
    && thirdSide + firstSide > secondSide) {

    if(firstSide === secondSide && firstSide !== thirdSide
    || secondSide === thirdSide && thirdSide !== firstSide
    || thirdSide === firstSide && secondSide !== firstSide) {
        console.log('Isosceles triangle');
    } else if(firstSide === secondSide
            && secondSide === thirdSide
            && thirdSide === firstSide) {
            console.log('Euquivalent triangle')
    } else {
        console.log('Normal triangle');
    }

} else {
    console.log('Triangle doesn’t exist');
}