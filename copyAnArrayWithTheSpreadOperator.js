//Basic Data Structures: Copy an Array with the Spread Operator

/*We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).*/

function copyMachine(arr, num) {
    let newArr = []; 
    while (num >= 1) {
      // change code below this line
      newArr.push([...arr]);
      // change code above this line
      num--;
    }
    return newArr;
   
  }
  
  // change code here to test different cases:
  
  console.log(copyMachine([true, false, true], 6));
  
  /*
  function copyMachine(arr, num) {
    let newArr = [];  // new array declaration
    while (num >= 1) { //defines how many times the array will copy
      // change code below this line
      newArr.push([...arr]); //push method adds arr in the end of new arr
      // change code above this line
      num--;  //decrements to reach the stop condition
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 6)); */