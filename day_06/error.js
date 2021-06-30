setTimeout(function(){
    try{
        noSuchVariable;
    } catch{
        alert("error is caught here!");
    }
}, 1000);

try {
    lalala;
}catch(err){
    alert(err.name);
    alert(err.message);
    alert(err.stack);

    alert(err);
}

let json = '{ "age" : 30 }';

try {
    let user = JSON.parse(json);

    if(!user.name){
        throw new SyntaxError("Incomplete data");
    }

    alert(user.name);
} catch(err){
    /*if(err instanceof SyntaxError){  
        alert("JSON ERROR: " + err.message);
    }*/
    throw err;
}

let num = +prompt("Number pls?", 12);

let diff, result;

function fib(n){
    if(n < 0 || Math.trunc(n) != n) {
        throw console.error("Must be positive integer");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try{
    result = fib(num);
} catch(err){
    result = 0;
} finally {
    diff = Date.now() - start;
}

alert(result || "error occur");
alert(`execution took ${diff}ms`);


//try{}catch{}finally{}

//error: msg, name, stack