// class Rabbit{}
// let rabbit = new Rabbit();

// alert(rabbit instanceof Rabbit);

function Rabbit(){}

alert(new Rabbit()  instanceof Rabbit);

let arr = [1, 2, 3];

alert(arr instanceof Array);
alert(arr instanceof Object);

//check Systembol.hasInstance
//check if any of the proto chain is equal to Class.proto

let objectToStrning = Object.prototype.toString;

let arr1 = [];

alert(objectToStrning.call(arr1));

alert(objectToStrning.call(123));
alert(objectToStrning.call(null));
alert(objectToStrning.call(alert));


let user = {
    [Symbol.toStringTag]: "User"
};

alert(objectToStrning.call(user));