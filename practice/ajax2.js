document.getElementById('button1').addEventListener('click', loaduser);
document.getElementById('button2').addEventListener('click', loadusers);


function loaduser(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function(){
        if (this.status == 200){
            // console.log(this.responseText);
            let user = JSON.parse(this.responseText);

            let output = '';

            output += `<ul><li>ID: ${user.id}</li><li>Name: ${user.name}</li><li>email: ${user.email}</li></ul>`;

            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
}


function loadusers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function(){
        if (this.status == 200){
            // console.log(this.responseText);
            let users = JSON.parse(this.responseText);

            let output = '';

            for (let user of users){
                output += `<ul><li>ID: ${user.id}</li><li>Name: ${user.name}</li><li>email: ${user.email}</li></ul>`;
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    
    xhr.send();
}