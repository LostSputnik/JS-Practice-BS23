document.getElementById('button').addEventListener('click', loadusers);

function loadusers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function(){
        if(this.status == 200){
            let users = JSON.parse(this.responseText);

            // console.log(users);
            let output = '';

            for (let user of users){
                output += `<div class="user"><img src=${user.avatar_url} width="70" height="70"><ul><li>ID: ${user.id}</li><li>login:${user.login}</li></ul></div>`;
            }
            document.getElementById('users').innerHTML = output;

        }
    }

    xhr.send();
}


//for post
//params = "name="+name
//setRequestHeaders(contenttype, app/x-www-form-urlencoded), then pass the paras in xhr.send(params)

//new xhr, xhr open, xhr onload, (xhr requestHeaders) xhr send
//onload, check if status == 200