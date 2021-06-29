// let user = {
//     firstName: "John",
//     sayHi() {
//         alert(`Hello, ${this.firstName}!`);
//     }
// };

// setTimeout(() => user.sayHi(), 1000);

// user = {
//     sayHi(){    alert("onno ekjon"); }
// };


// let user = {
//     firstName: "john"
// };

// function func(){
//     alert(this.firstName);
// }

// let funcUser = func.bind(user);

// funcUser();

// let user = {
//     firstName: "John",
//     sayHi(){
//         alert(`Hello, ${this.firstName}!`);
//     }
// };

// let sayHi = user.sayHi.bind(user);

// sayHi();

// setTimeout(sayHi, 1000);

// user = {
//     sayHi(){alert("another userrr");}
// };


//partial

// function mul(a, b){
//     return a * b;
// }

// let triple = mul.bind(null, 3);

// alert( triple(3) );
// alert( triple(4) );
// alert( triple(5) );

function partial(func, ...argsBound){
    return function(...args){
        return func.call(this, ...argsBound, ...args);
    }
}

let user = {
    firstName: "ami", 
    say(time, phrase){
        alert(`[${time}] ${this.firstName}: ${phrase}!` );
    }
};

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
user.sayNow("hello");