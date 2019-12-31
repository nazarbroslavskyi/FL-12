function getMin() {
    let min = arguments[0];
    [...arguments].forEach(item => {
        if(item < min) {
            min = item
        }
    });
    return min;
}
console.log(getMin(1, 3, -1, -10, 5, -5, -2));

//-----------------------short solution --------------- 
// function getMin() {
//     return Math.min(...arguments);
// }