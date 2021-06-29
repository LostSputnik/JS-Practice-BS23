let animal = {
    eats: true,
    walk(){
        alert("Animal Walk");
    },
};

let rabbit = {
    jumps: true,
    __proto__: animal,
};

// rabbit.__proto__ = animal;

rabbit.walk();

//cannot go in circles

//one prototype

// ___proto__ is getter setter for [[prototype]]


let user = {
    name: "john",
    surname: "smth",

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

// alert(admin.fullName);

// admin.fullName = "Alice Cooper";

// alert(admin.fullName);
// alert(user.fullName);

//alert(Object.keys(admin));
for(let prop in admin){
    let isOwn = admin.hasOwnProperty(prop);
    if(isOwn){
        alert(`Our: ${prop}`);
    }else{
        alert(`Inherited: ${prop}`);
    }
}

