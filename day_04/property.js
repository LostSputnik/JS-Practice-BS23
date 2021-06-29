// alert('hulo');

let user = {
    name: "John",
};

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert(JSON.stringify(descriptor, null, 2));

// let user = {};

// Object.defineProperty(user, "name", {
//     value: "John"
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert(JSON.stringify(descriptor));

// Object.defineProperty(user, 'name', {
//     writable: false,
// });

// user.name = 'Pete';
// alert(user.name);

let clone = {
    name: "john",
    toString(){
        return this.name;
    }
};

Object.defineProperty(clone, 'toString', {
    enumerable: false
});

//for (let key in clone) alert(key);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// alert(JSON.stringify(descriptor, null, 2));


let ok = {
    name: "john",
    roll: 3,
};

Object.defineProperty(user, 'name', {
    configurable: false,
    writable: false,
});

user.name = 'Pete';
delete user.name;
alert(user.name);

descriptor = Object.getOwnPropertyDescriptors(ok);

// alert(JSON.stringify(descriptor, null, 2));


let c2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(ok));
alert(JSON.stringify(c2, null, 2));

//seal, freeze, prevent extentios