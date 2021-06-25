// let arr = new Array();
let arr = [];

arr.push("bal");
arr.push("sal");

// alert(arr);
// alert(arr.pop());
// alert(arr);

arr.unshift("test");
// alert(arr);
//push, shift (multiple elements)
// arr[100]= 'ok';
// arr.test = 2;
// alert(arr);


// for(let i = 0; i < arr.length; i++){
//     alert(arr[i]);
// }

// for (let val of arr){
//     alert(val)
// }

//arr.length is editable

let aarr = new Array(2, 3, 4);
//alert(aarr.toString());

//let a = b = [];
// let b = [];

// alert(a === b);

//delete aarr[1];

aarr.splice(1, 0, 15, 6, 7);
clone = aarr.slice();
// alert(aarr === clone);

//concat

//foreach

//indexOf, includes, lastIndexOf

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Popa"},
    {id: 3, name: "Kopa"},
]

// let user = users.find(item => item.id == 2);
// alert(user.name);

// let user2 = users.filter(function(test){
//     return test.id > 1;
// });
// alert(user2[0].name);


// map

// let x = clone.sort();
// alert(clone === x);

function compare(a, b){
    if(a > b)   return 1;
    if(a == b)  return 0;
    if(a < b)   return -1;
}



clone.sort();
// alert(clone);
//clone.sort(compare);

clone.sort( (a, b) => a - b)
clone.reverse();
// alert(clone);


//arr.split(delim)

//arr.join

// alert(Array.isArray([]));

//reduce

let nums = [1, 2, 3, 4, 5];

let result = nums.reduce((sum, current) => sum + current);
alert(result);