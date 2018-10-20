/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
const average = num => {
      let arr = 0; 
    for (let i = 0; i < num.length; i ++){
       arr = arr + num[i];
    }
   return arr / num.length;
}
   
console.log(average([1,2,3,4]));
console.log("--------------end of problem 1---------------------"); 
/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
const squareEach = arr => {
    let result = []; 
  for (let i = 0; i < arr.length; i ++){
    // let root = Math.floor(Math.sqrt(num[i] * num[i]));
    result.push(arr[i] * arr[i]); 
  }
 return result;
}
console.log(squareEach([1,2,3,4])); // [1,4,9,16]
console.log("--------------end of problem 2---------------------"); 
/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/

const averageSquare = arr => average(squareEach(arr));
console.log(averageSquare([1,2,3,4]));
console.log("--------------end of problem 3---------------------"); 
/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
const negateArr = arr => {
 const copyArr = [...arr];
 for (let i =0; i < copyArr.length; i++){
     copyArr[i]*= -1;
 }
    return copyArr
}
console.log(negateArr([1,2,3,4]));
console.log("--------------end of problem 4---------------------"); 
/*

    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
const reverseArr = arr => {
   for (let i = arr.length -1; i >=0; i-- ){
      console.log(arr[i])

   }
   // return arr;
} 
console.log(reverseArr([1,2,3,4]));
console.log("--------------end of problem 5---------------------"); 
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
const negateBackwards = arr => {
    const copyArr1 = [...arr];
    for (let i =copyArr1.length - 1; i >= 0; i--){
        copyArr1[i]*= -1;
    }
       return copyArr1
   }
   console.log(negateBackwards([1,2,3,4]));
   console.log("--------------end of problem 6---------------------"); 


