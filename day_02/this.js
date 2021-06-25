let user = {name: "John", };
let admin = {name: "Pop", };

let sayHi = function(){
    alert(`Hello, ${this.name}`);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

admin['f']();

let cop = {
    hello() {
        //alert("function body")
        let arrow = () => alert(this.name);
        arrow();
    },
    name: "john",
}

cop.hello();