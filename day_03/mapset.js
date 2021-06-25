let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

// alert(map.get(1));
// alert(map.get('1'));

// alert( map.size );

let john = {name: "John" };

let count = new Map();

count.set(john, 123);

// alert(count.get(john));

let recipeMap = new Map([
    ['ok', 500],
    ['pok', 230],
    ['tok', 50],
])

for(let veg of recipeMap.keys()){
    // alert(veg);
}

for(let amount of recipeMap.values()){
    // alert(amount);
}

for(let entry of recipeMap){
    // alert(entry);
}

let obj = {
    name: "John", 
    age: 30
};

map = new Map(Object.entries(obj));

// alert(map.get("name"));

map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let clone = Object.fromEntries(map);

// alert(clone.meat);


let set = new Set();

john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(pete);
set.add(john);

// alert(set.size);

for(let user of set){
    // alert(user.name);
}

set.forEach((value) => alert(value.name))
