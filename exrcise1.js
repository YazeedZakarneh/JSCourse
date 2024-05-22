


// let grades = {
//     math: 90,
//     english: 100,
//     arabic: 80,

//     fun() {
//         console.log('Hello')
//     }

// };

// function addCourse(name, grade) {
//     grades[name] = grade;
// }

// function findGrade(name) {
//     return grades.hasOwnProperty(name) ? grades[name] : false;
// }

// function updateGrade(name, grade) {
//     grades[name] = grade
// }

// function calculateGPA() {
//     let count = 0, sum = 0
//     for (let value of Object.values(grades)) {
//         if (typeof (value) == 'number') {
//             count++
//             sum += value
//         }
//     }
//     return sum / count
// }

// console.log(grades)
// addCourse('CS', 60)
// console.log(grades)
// console.log(findGrade('english'))
// updateGrade('CS', 70)
// console.log(grades)
// console.log(calculateGPA())

// function map(arr,func) {

//     for(let i in arr)
//         func(arr[i]);
// }

let products = [
    { name: 'Apple', price: 30 },
    { name: 'Banana', price: 10 },
    { name: 'Cherry', price: 20 },
    { name: 'Date', price: 40 },
];

let productsNames = products.map((ele) => ele.name)
console.log(productsNames)

let priceProducts = products.filter(ele => ele['price'] > 20)
console.log(priceProducts)

let totalCost = products.reduce((sum, ele) => ele.price + sum, 0)
console.log(totalCost)

let joinedProducts = productsNames.join(', ')
console.log(joinedProducts)