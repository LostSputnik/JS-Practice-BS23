// let now = new Date(-24 * 3600 * 1000);

let now = new Date(2017, 1, 25, 6);
alert(now);
alert(now.getDate());
now.setDate(now.getDate() + 11);
alert(now);
alert(now.getDay());
alert(now.getTimezoneOffset());

let start = Date.now();

for (let i = 0; i < 100000; i++){
    let ok = i * i * i;
}

let end = Date.now();

alert("took " + (end - start) + " ms");

// YYYY-MM-DDTHH:mm:ss:sssZ

let date = new Date(Date.parse('2012-01-26T12:51:50.417-07:00'));
alert(date);