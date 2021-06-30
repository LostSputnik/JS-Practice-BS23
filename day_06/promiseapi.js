let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig',
    'https://no-such-url'
  ];

 let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
  ));

Promise.allSettled(urls.map(url => fetch(url)))
.then(results => {
    results.forEach((result, num) => {
        if(result.status == 'fulfilled'){
            alert(`${urls[num]} ${result.value.status}`);
        }
        if(result.status == 'rejected') {
            alert(`${urls[num]}: ${result.reason}`);
        }
    });
});

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert, alert); // 1
  
let promise = Promise.reject(new Error("Promise failed!"));
promise.catch(err => alert("dhorse"));

window.addEventListener('unhandledrejection', event => alert(event, reason));

//promise handling is always asynchronous
//.them/.catch/.finally always called after current task is finished