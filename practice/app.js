// // // // // const para = document.getElementById("page-title");
// // // // // console.log(para);

// // // // // const errors = document.getElementsByClassName("error");
// // // // // console.log(errors[0]);

// // // // // // errors.forEach(error => {
// // // // // //     console.log(error);
// // // // // // })


// // // // const tags = document.getElementsByTagName('p');
// // // // console.log(tags);

// // // // const para = document.querySelector('p');

// // // // console.log(para.innerText);

// // // // para.innerText = " ninja yo";

// // // // const content = document.querySelector('.content');

// // // // console.log(content.innerHTML);

// // // content.innerHTML = '<h2>THis is a h2</h2>'

// // // const people = ['mario', 'luigi', 'ok'];

// // // people.forEach(person =>{
// // //     content.innerHTML += `<p>${person}</p>`
// // // }); 

// // const link = document.querySelector('a');

// // console.log(link.getAttribute('href'));

// // link.setAttribute('href', 'https://www.wikipedia.com'); 
// // link.innerText = "wiki";

// // const mssg = document.querySelector('p');
// // console.log(mssg.getAttribute('class'));
// // mssg.setAttribute('class', 'success');
// // mssg.setAttribute('style', 'color:green;');
// // console.log(mssg.style);

// // mssg.style.margin = "50px";
// // mssg.style.color = "red";
// // mssg.style.fontSize = "60px";
// // mssg.style.margin = "";

// const content = document.querySelector('p');

// // content.classList.add('okpoa'); 
// content.classList.remove('error');
// content.classList.add('success');
// console.log(content.classList);


const ok = document.querySelectorAll('p');

ok.forEach(para => {
    if(para.textContent.includes("error")){
        para.classList.add("error");
    }
    if(para.textContent.includes("success")){
        para.classList.add("success");
    }
});

const title = document.querySelector(".title");
title.classList.toggle('test');
title.classList.toggle('test');
