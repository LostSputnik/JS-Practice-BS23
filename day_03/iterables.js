let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function() {
    return{
        current: this.from,
        last: this.to,

        next(){
            if(this.current <= this.last){
                return { done: false, value: this.current++};
            }
            else{
                return { done: true };
            }
        }
    }
};

for (let num of range) {
    alert(num);
}

let str = "Hello";

let iterator = str[Symbol.iterator]();

while(true){
    let result = iterator.next();
    if(result.done) break;
    alert(result.value);
}

let arr = Array.from(range);
alert(arr);