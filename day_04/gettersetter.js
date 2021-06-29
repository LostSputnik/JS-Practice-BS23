let user = {
    name: "John",
    surname: "Smith",

    // get fullName(){
    //     return `${this.name} ${this.surname}`;
    // },

    // set fullName(value){
    //     [this.name, this.surname] = value.split(" ");
    // }
};

Object.defineProperty(user, 'fullName', {
    get(){
       return `${this.name} ${this.surname}`;   
    },
    set(value){
        [this.name, this.surname] = value.split(" ");
    }
})
alert(user.name);
alert(user.surname);
alert(user.fullName);



user.fullName = "Alice Cooper";
alert(user.name);
alert(user.surname);
alert(user.fullName);

for(let key in user)    alert(key);

function clone(name, birthday){
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get(){
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}


let john = new clone("Johnj", new Date(1992, 6, 1));

alert(john.birthday);
alert(john.age);
