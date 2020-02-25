//Task 1
const maxElement = (arr) => Math.max(...arr);

// const array = [1, 2, 3, 4, 56, 7, 8, 76, 5 ,241, 5, 356, 567, 2];
// console.log(maxElement(array));

//Task 2
const copyArray = (arr) => [...arr];

// const array = [1, 2, 3];
// const copiedArray = copyArray(array);
// console.log(array, copiedArray);
// console.log(array === copiedArray);

//Task 3 
function addUniqueId(obj) {
    const uniqueId = Symbol('id');
    return {
        ...obj,
        id: uniqueId
    }
}

// let obj = { 
//     name: 123
// }
// console.log(obj);
// let result = addUniqueId(obj);
// console.log(result);
// console.log(result === obj); // false

//Task 4


function regroupObject({name: firstName, details: {id, age, university} } = obj) {
    return {
        university,
        user: {
            age,
            firstName,
            id
        }
        
    }
}

// const oldObj = {
//     name: 'Someone',
//     details: {
//         id: 1,
//         age: 11,
//         university: 'UNI'
//     }
// };
// console.log(regroupObject(oldObj));

//Task 5
const findUniqueElements = (arr) => [...new Set(arr)];
// const arr = [1, 1, 1, 1, 1, 3, 4, 4, 5, 7, 8, 899, 9, 6, 5, 5, 5, 4, 3, 23];
// console.log(findUniqueElements(arr));

//Task 6
const hideNumber = (str) => str.slice(-4).padStart(str.length, '*');

// const phone = "0123456789";
// console.log(hideNumber(phone));

//Task 7
const add = (a = (() => {throw new Error('Parametrs are required')})(), b = (() => { throw new Error('Parametrs are required')})()) => a + b;
// console.log(add(5));

//Task 8
function getData(api) {
    fetch(api)
    .then(res => res.json())
    .then(res => console.log(res.map(el => el.name).sort()))
    .catch(error => console.log(error.message));
}

// getData(`https://api.github.com/users/nazarbroslavskyi/repos`);

//Task 9
async function getDataTwo(api) {
    try {
        const response = await fetch(api);
        const repositories = await response.json();
        console.log(repositories.map(el => el.name).sort());
    } catch(err) {
        console.log(err.message);
    }
  

}

// getDataTwo(`https://api.github.com/users/nazarbroslavskyi/repos`);