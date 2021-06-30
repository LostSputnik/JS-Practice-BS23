// async function f(){
//     // return 1;
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });

//     let result = await promise;
//     alert(result);
// }

// f();
// // f().then(alert);

// async function f(){
//     try{
//         let response = await fetch('/nooo');
//         let user = await response.json();
//     }catch(err){
//         alert(err);
//     }
// }
// f();

class Thenable {
    constructor(num){
        this.num = num;
    }

    then(resolve, reject){
        alert(resolve);

        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

async function f() {
    let result = await new Thenable(1);
    alert(result);
}
f();