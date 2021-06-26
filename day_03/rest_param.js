function sumAll(){
    //let sum = 0;
    //for (let arg of args) sum += arg;
    return arguments.length;

    //return sum;
}

// alert(sumAll(5));
// alert(sumAll(1, 6));
// alert(sumAll(15, 6, 9));

//array functions dont have their own this, hence no own arguments object either

function f(){
    let showArg = () => alert(arguments[3]);
    showArg();
}

// f(5);

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(1, ...arr1, 2, ...arr2));
// alert([...arr1])

let str = "hell";

alert([...str])

let clone = [...arr1];
alert(clone);

//let arrcopy = Object.assign([], arr)