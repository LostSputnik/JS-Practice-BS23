// let id = Symbol("id");
// alert(id.toString());

let user = {name: "John", };

let id = Symbol();

user.id = 1;

alert(user.id)

let i = Symbol("id");

let us = {
    name: "pop",
    [i]: 2,
}

alert(us[i]);
alert(i.description)

let j = Symbol.for("nss");
let k = Symbol.for("nss");

alert(j === k);

alert(Symbol.keyFor(j));