function* generateSeq(){
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSeq();

// let one = generator.next();

// alert(JSON.stringify(one));

for(let value of generator){
    alert(JSON.stringify(value));
}

let seq = [0, ...generateSeq()];

alert(seq);

let range = {
    from: 1,
    to: 5, 

    *[Symbol.iterator](){
        for(let value = this.from; value <= this.to; value++){
        yield value;
        }
    }
};

alert([...range]);


function* generateSequence(start, end){
    for(let i = start; i <= end; i++)   yield i;
}

function* generatePass(){
    yield* generateSequence(48, 57);

    yield* generateSequence(65, 90);

    yield* generateSequence(97, 122);
}

let str = '';

for (let code of generatePass()){
    str += String.fromCharCode(code);
}

alert(str);

function* gen(){
    let result = yield "2 + 2 = ?";
    alert(result);

}
let generat = gen();
let question = generat.next().value;
alert(question);
generat.next(4);

function* clone(){
    try{
        let result = yield "2 + 2 = ?";

        alert("The exec no here");
    }catch(e){
        alert(e);
    }

}
let c = clone();
let q = c.next().value;

c.throw(new Error("Nai answer"));