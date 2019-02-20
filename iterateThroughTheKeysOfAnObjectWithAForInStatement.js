//Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement

/* We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.*/

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function countOnline(obj) {
    // change code below this line
    let counter = 0;
    for (let user in users){
      if(obj[user].online === true){
  
        counter = counter + 1;
        }
    }
       return counter;
    
    
    // change code above this line
  }
  
  console.log(countOnline(users));
  