let user = null;
alert(user?.address?.street);

alert(user?.["with space"]);

let u = {
    sayHi(){alert("Hey");}
}

u.sayHi?.();
u.sayBi?.();