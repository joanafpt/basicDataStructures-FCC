//Basic Data Structures: Access Property Names with Bracket Notation

/*We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.*/


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // do not change code above this line
  
  function checkInventory(scannedItem) {
    // change code below this line
     
    if(scannedItem == 'apples'){
       return foods.apples;
     }
    else if(scannedItem == 'oranges'){
      return foods.oranges;
    }
    else if (scannedItem == 'plums'){
      return foods.plums;
    }
    else if (scannedItem == 'bananas'){
      return foods.bananas;
    }
    else if (scannedItem == 'grapes'){
      return foods.grapes;
    }
    else {
      return foods.strawberries;
    }
  }
  
  // change code below this line to test different cases:
  console.log(checkInventory("strawberries"));