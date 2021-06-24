let hello = function(){
    alert("Hello there!")
}

hello();

let arrow = (a, b) => a + b;
alert(arrow(2, 3));

let test = () => alert("ok");
test();

let test2 = () => {
    let val;
    val = 3;
    return val;
}

alert(test2());

let test3 = () => confirm("r u ok?");
// see if true of false
alert(test3());