// alert("ashse")

(async() => {
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);
let commits = await response.json();

alert(commits[0].author.login);
alert(response.headers.get('Content-Type'))
// let text = await response.text();
// alert(text.slice(0, 500) + '...');

for (let [key, value] of response.headers){
    // alert(`${key} = ${value}`);
}
})()


// hello = {'ok': {
//     's': 7,
// }}


let user = {
    name: "John",
    surname: 'Smith'
};

let response = await fetch('/link/to', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = await response.json();

alert(response.message);