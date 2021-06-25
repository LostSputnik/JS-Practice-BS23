let user = {
    name:"John",
    age: 30,
    "with space": 5,
}


//alert(user["with space"]);
//alert(user."with space"); //doesn't work


let key = "with space";

//alert(user[key]);
// alert(user.key); //undefined

function makeUser(name, age){
    return {
        name: name,
        age: age,
    };
}

let person = makeUser("Plato", 55);
let another = makeUser("Rob", 35);
// alert(person['name']);
// alert(person['age']);


// for (let key in person){
//     alert(person[key]);
// }


let person2 = {};

Object.assign(person2, another, person);

// for (let key in person2){
//     alert(person2[key]);
// }

let test = {
    name: "me",
    in: {
        age: 30,
        real: 35,
    },
};

let clone = {};

//Object.assign(clone, test);

for(let key in test){
    clone[key] = test[key];
}

alert(clone.in === test.in); //true for both assign and for, shallow nest


// function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
//   }
  
//   let user = makeUser("John", 30);
//   alert(user['name']); // John
