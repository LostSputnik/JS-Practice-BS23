let sum = new Function('a', 'b', 'return a + b');

// alert(sum(1, 2));

//let sayHi = new Function('alert("Hello")');

// sayHi();


function sayHi(){
    alert('Hello');
}

//setTimeout(sayHi, 1000);

function hisay(phrase, who){
    alert(phrase + ', ' + who);
}

// setTimeout(hisay, 1000, "ok", "accha");

// setTimeout(() => alert("hell"), 1000);

// let timerId = setTimeout(() => alert("ksiu"), 1000);
// alert(timerId);

// clearTimeout(timerId);
// alert(timerId);


// let timerId = setInterval(() => {
//     alert('tick');
// }, 2000);

// setTimeout(() => {clearInterval(timerId); alert('stop');}, 5000);


// let i = 1;
// setInterval(function(){
//     func(i++);
// }, 100);

// let i = 1;
// setTimeout(function run() {
//     func(i++);
//     setTimeout(run, 100);
// }, 100);


//zero delay