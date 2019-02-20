//Basic Data Structures: Create complex multi-dimensional arrays

/*We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.*/

let myNestedArray = [          // NIVEL 1
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],  
    ['loop', 'shift', 6, 7, 1000, 'method', ['deep']],   
    ['concat', false, true, 'spread', 'array', [['deeper']]], 
    ['mutate', 1327.98, 'splice', 'slice', 'push', [[['deepest']]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']     
    // change code above this line
  ];
  
  /* [...
  
     third level -  ['deep']]
     fouth level - [['deeper']]]
     fifth level - [[['deepest']]]]
  
     ...]
   */