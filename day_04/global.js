// alert("hello");
// window.alert("hello");

//var vs let: var gets hoisted, and is early fetched like functions
//var has no block scope

// let sayHi = function(){
//     alert("hi");
// }

// alert(sayHi.name);

let arr = [function(){}];

// alert(arr[0].length);

function f1(a, b){}
function many(a, b, ...more){}

// alert(f1.length);
// alert(many.length);

function ask(question, ...handlers){
    let isYes = confirm(question);

    for(let handler of handlers){
        if(handler.length == 0){
            if(isYes) handler();
        }
        else{
            handler(isYes);
        }
    }
}

// ask("Question?", ()=>alert('you said yes'), result =>alert(result));

//nfe - named function expressions

// let sayHi = function func(who){
//     alert("Hello " + who);
// };

// sayHi('joohn');
// // func("john");

let sayHi = function func(who){
    if(who){
        alert("hello " + who);
    }
    else{
        func("Guest");
    }
};

let welcome = sayHi;
sayHi = null;

welcome();