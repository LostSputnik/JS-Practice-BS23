// function slow(x){
//     alert("called with " + x);
//     return x;
// }

// function cachingDecorator(func){
//     let cache = new Map();

//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }

//         let result = func(x);
//         cache.set(x, result);
//         return result;
//     };
// }

// slow = cachingDecorator(slow);

// alert(slow(1));
// alert("again " + slow(1));



let worker = {
    slow(min, max){
        alert(`Called with ${min}, ${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash){
    let cache = new Map();
    return function(){
        let key = hash(arguments);
        if(cache.has(key)){
            return cache.get(key);
        }

        let result = func.apply(this, arguments);

        cache.set(key, result);
        return result;
    };
}

function hash(args){
    //return args[0] + ',' + args[1];
    // return args.join(); //hobe na
    return ([].join.call(args)) ;
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5));
alert("again " + worker.slow(3, 5));