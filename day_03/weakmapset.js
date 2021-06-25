// alert("huko");
let john = {name: "John"};

let array = [0, 5, 6];

//john = null;

// alert(john);
// alert(array[0].name);

// let weakMap = new WeakMap();
// weakMap.set(john, "...");
// let map = new Map();
// map.set(john, "...");

// alert(weakMap.get(john));
// alert(map.get(john));

// john = null;
// alert(weakMap.has(john));
// alert(map.size);

for (test of array.entries()){
    // alert(test);
}


let ok = {
    1: 1,
    2: 4,
    3: 6,
}

//alert(typeof +Object.keys(ok)[0]);

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
}

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

function sumSal(obj){
    let result = +0;
    for (let values of Object.values(obj)){
        alert(values);
        result += +values;
    }
    return result;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

alert(sumSal(salaries));

// alert(Object.entries(doublePrices));