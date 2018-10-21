/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
const negateArr = arr => {
    const copyArr = arr.slice(0);
    for (let i =0 ; i < copyArr.length; i++){
       if(arr[i] < 0 ){
          copyArr[i] = copyArr[i] * -1

       } else{
        copyArr[i]
       } 
    }  

    return copyArr
   }
   console.log(negateArr([-3,-2,1,2,3,-4]));
//
const negateArr1 = arr => {
    const arrResult = [];
  for (let i=0;  i < arr.length; i++){
     arrResult.push(Math.abs(arr[i]));

  }
   return arrResult;
}
console.log(negateArr1([-3,-2,1,2,3,-4]));
console.log("--------------end of problem 1---------------------"); 
/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/


/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
const removeOdds = arr => {
    let copyArr = arr.slice(0);
    for (let i =0 ; i < copyArr.length; i++){
       if(arr[i] %2 === 0 ){
          copyArr[i] += 2;  

       } else{
        copyArr[i]
       } 
    }  

    return copyArr
   }

   console.log(removeOdds([1,2,3,4]));
/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
const addSquares = arr => {
    let result = [...arr]; 
    for (let i = 0; i < arr.length; i ++){
      result.push(arr[i] * arr[i]); 
    }
   return result;
}
console.log(addSquares([1,2,3,4]));

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/


/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
