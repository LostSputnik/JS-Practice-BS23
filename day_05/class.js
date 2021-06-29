// class User {
//     constructor(name){
//         this.name = name;
//     }

//     sayHi(){
//         alert(this.name);
//     }
// }

// let user = new User("John");
// user.sayHi();

// alert(typeof User);

// alert(User.prototype.sayHi);
// alert(User);

// let clone = class MyClass {
//     sayHi(){
//         alert(MyClass);
//     }
// };

// new clone().sayHi();

// alert(MyClass);

// function makeClass(phrase){
//     return class {
//         sayHi(){
//             alert(phrase);
//         }
//     };
// }

// let User = makeClass("Hello");

// new User().sayHi();


// class User {
//     constructor(name){
//          this.name = name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(value.length < 4){
//             alert("Too smol");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("John");
// alert(user.name);

// user = new User("");
// //alert(user.name);

// class User {
//     ['say' + 'Hi'](){
//         alert("hello");
//     }
// }
// new User().sayHi();

// class User {
//     name = "John";
// }

// let user = new User();

// alert(user.name);
// // alert(User.prototype.user);


class Button {
    constructor(value){
        this.value = value;
    }

    cat(){
        alert("lol");
    }

    click = () => {
        alert(this.value);
    }
}


let button = new Button("hell");
button.cat();

Button.prototype.cat();

setTimeout(button.click, 1000);