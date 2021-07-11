const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: sumthng went wrong');
            }
        }, 2000);
    });
}

// createPost({ title: 'Post Three', body: 'This is post three.' })
// .then(getPosts)
// .catch(err => console.log(err));

// async / await

// async function init(){
//     await createPost({ title: 'Post Three', body: 'This is post three.' });

//     getPosts();
// }

// init();

// async await with fetch

async function fetchUsers(){
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9781451648546')
    const data = await res.json();

    console.log(data);
    const book = await data.items[0];
    let title = (book["volumeInfo"]["title"]);
    let image = book['volumeInfo']['imageLinks']['thumbnail'];
    console.log(title);
    console.log(image);
    const ii = document.querySelectorAll('#cover');
    //ii.src = image;
    ii.forEach(img => img.src = image);
}

fetchUsers();


//promise.all

// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'GoodBye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));

