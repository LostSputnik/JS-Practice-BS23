document.getElementById('button').addEventListener('click', loadText);

function loadText(){
    // console.log("button clicked")
    var xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('GET', 'sample.txt', true);
    console.log('REady: ', xhr.readyState);

    xhr.onprogress = function(){
        console.log('ready ', xhr.readyState);
    }

    xhr.onload = function(){
        console.log('ready ', xhr.readyState);
        if(this.status == 200){
            document.getElementById('text').innerHTML = this.responseText;
            // console.log(this.responseText);
        } else if(this.status == 404){
            document.getElementById('text').innerHTML = 'Not Found';
        }
    }
    xhr.onerror = function(){
        console.og('request error....');
    }

    // xhr.onreadystatechange = function(){
    //     console.log('REady: ', xhr.readyState);
    //     if(this.readyState == 4 && this.status == 200){
    //         console.log(this.responseText);
    //     }
    // }
    xhr.send()
}