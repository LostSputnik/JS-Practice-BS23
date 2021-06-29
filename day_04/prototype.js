// f prototype

let animal = {
    eats: true
};

function Rabbit(name){
    this.name = name;
    alert(name);
    // Rabbit.prototype = animal;
}

Rabbit.prototype = animal;
alert(Rabbit.prototype.constructor === Rabbit);

let rabbit = new Rabbit("White Rabbit");
let r2 = new rabbit.constructor("Black Rabbit");

alert(rabbit.eats);



// function Rabbit(){}

// Rabbit.prototype = {
//     jumps: true,
//     constructor: Rabbit,
// };

// alert(Rabbit.prototype.constructor === Rabbit);


//******* */
// NATIVE PROTOTYPES
//*******  */

// let obj = {};

// alert(obj.__proto__ == Object.prototype);

//all the built-in prototypes have object.prototype at the top

// let arr = [1, 2, 3];

// alert(arr.__proto__.__proto__ == Object.prototype);

//primitives get temporary object wrappers
// methods are provided this way

// null and undefined have to obj wrappers


// String.prototype.show = function(){
//     alert(this);
// };

// "BOOM".show();

// let obj = {
//     0: "hello",
//     1: "world",
//     length: 2,
// };

// obj.join = Array.prototype.join;

// alert(obj.join(','));

//console.dir([1, 2, 3]) in chrome dev consolde


//getPrototypeOf, setPrototypeOf

let animal = {
    eats: true
};

// let rabbit = Object.create(animal);

let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});

// alert(rabbit.eats);

// alert(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, {});

//let clone = Object.create(Object.getPrototypeOf(obj), Obj.getOwnPrototypeDescriptors(obj));

//protoype in constructs
//Object.create, __proto__
//Object.get/setPrototypeOf

let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]);

let chia = Object.create(null);
chia.hello = "f";
chia.bye = "u";

alert(Object.keys(chia));