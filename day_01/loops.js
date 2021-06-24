//working with labels
//rest is similar to C 

label: for(let i = 0; i < 5; i++){
    for(let j = 0; j < 3; j++){
        alert(j);
        if(i == 1){
            break label;
        }
    }
}

alert("wow");