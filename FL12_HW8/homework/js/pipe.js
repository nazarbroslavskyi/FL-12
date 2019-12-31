function addOne(x) {
    return x + 1;
}
  
const pipe = (...args) => args.reduce((acc, el) => el(acc));

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));