// class ValidationError extends Error {
//     constructor(message){
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function test(){
//     throw new ValidationError("Whoops!");
// }

// try{
//     test();
// } catch(err){
//     alert(err.message);
//     alert(err.name);
//     alert(err.stack);
// }

class MyError extends Error {
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends MyError{}

class PropertyRequiredError extends ValidationError {
    constructor(property){
        super("No property: " + property);
        this.property = property;
    }
}

alert(new PropertyRequiredError("filed").name);