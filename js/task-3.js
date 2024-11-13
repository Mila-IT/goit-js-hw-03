function filterArray(numbers, value) {
    const newArray = [];
    for (const number of numbers) {
        if (number > value) {
            newArray.push(number);
        }
    }
    return newArray;
}

// Function declaration

// function filterArray(numbers, value) {
//     let newArray = []
//     for (let i = 0; i < numbers.length; i += 1){
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }
//     return newArray
// }


// Function expression

// const filterArray = function(numbers, value) {
//     let newArray = []
//     for (let i = 0; i < numbers.length; i += 1){
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }
//     return newArray
// }

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
