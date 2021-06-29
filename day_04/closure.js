function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    };
}

let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());

function f(){
    let value = Math.random();

    function g(){
        debugger;
    }

    return g;
}

let g = f();
g();


let value = "Surprise!";

function f(){
    let value = "close";

    function g(){
        debugger;
    }
    return g;
}

let g = f();
g();


let name = "John";

function sayHi(){
    alert("Hi, " + name);
}

name = "Pete";
sayHi();

"use strict"

let phrase = "hello";
//sayHi();
if (true) {
    let user = "john";
    function sayHi(){
        alert(`${phrase}, ${user}`);
    }
}

sayHi();

function sum(a){
    return function(b){
        return a + b;
    }
}

alert(sum(1)(2));

let x = 1;

function func(){
    console.log(x);
    let x = 2;
}

func();

function inBetween(a, b){
    return function(x){
        return x >= a && x <= b;
    };
}

let arr = [1, 2, 3, 4, 5, 6];
alert(arr.filter(inBetween(3, 6)));

(function(){
    alert("paren around func");
})();

(function(){
    alert("paren around whole thing");
}());