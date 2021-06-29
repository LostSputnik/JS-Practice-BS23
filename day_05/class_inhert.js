class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }

  
class Rabbit extends Animal {
    constructor(name, earLength){
        // this.speed = 0;
        // this.name = name;
        super(name);
        this.earLength = earLength;
    }

    hide(){
        alert(`${this.name} hides!`);
    }

    stop(){
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit("White Rabbit", 10);

rabbit.run(5);
rabbit.stop();

// function f(phrase){
//     return class{
//         sayHi(){    alert(phrase); }
//     };
// }

// class User extends f("Hello") {}

// new User().sayHi();

//super.method() for the method, super() for the constructor(inside our constructor only);

//arrow functions have no super

