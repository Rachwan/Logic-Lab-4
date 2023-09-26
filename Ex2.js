// Ex 2.1

/*
    Array1 = 0, 1, 2, 3, 4, 5
    Array2 = 4, 5, 6, 7, 8, 9, 0
    Output = 4, 5, 0
*/

function theSimilarities(arrayOne, arrayTwo) {
    // create an emply array to push the similarities elements inside it 
    let result = [];
    // will go through each element in arrayOne now, first will start with the first element then start moving to next then next till the end
    for (let element of arrayOne) {
        // we have 2 conditions here:
        // 1. if the element inside the arrayTwo because we are looking to similiarities. 
        // 2. check if the element inside the result or not it should not be in the result array (this is for repeted numbers)
        if (arrayTwo.includes(element) && !result.includes(element)) {
            // if the element inside the second array and is not in the result array push the element into the result array
            result.push(element);
        }
    }
    // when we finish the loop return the result
    return result;
}

let arr1 = [0, 1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8, 9, 0];
console.log(theSimilarities(arr1, arr2));

// Ex 2.2

/*
    Array1 = 0, 1, 2, 3, 4, 5
    Array2 = 4, 5, 6, 7, 0
    Output = 0, 1 ,2 ,3 ,4 ,5 ,6 ,7
*/


function intersectTwoArrays(arrayOne, arrayTwo) {
    // Combine both arrays into one array to make it easy
    let combined = arrayOne.concat(arrayTwo);
   // create an emply array to push the unique elements inside it
    let result = [];
   // look for each element inside the combined array
    for (let element of combined) {
       // Check if the element is not already in the result array
        if (!result.includes(element)) {
       // if the element is not inside the result element =>  Add the unique value to result
        result.push(element);
        }
}
    return result;
}

// let arr1 = [0, 1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 0];

console.log(intersectTwoArrays(arr1, arr2));