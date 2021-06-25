function User(name){
    this.name = name;
    this.isAdmind = false;
    this.sayHi = function(){
        alert("Hey, I'm " + this.name);
    };
}

alan = new User("Alan");
// alert(alan.name);

alan.sayHi();
