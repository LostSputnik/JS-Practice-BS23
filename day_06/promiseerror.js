new Promise((resolve, reject) => {
    //reject(new Error("Whoops!"));
    //throw new Error("whoops");
    resolve("ok");
})
.then(alert('yo'))
.then(() => blah())
.then(() => alert("ok"))
.catch((error) => alert(error))
.then(() => alert("poke"));

