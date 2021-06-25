// alert("hulo");

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
}

let json = JSON.stringify(student);

//alert(json);


//ignores functions, symbols, undefined


let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  
  room.occupiedBy = meetup; 

// alert(JSON.stringify(meetup, ['title', 'participants', 'name']));  

// alert(JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return (key == 'occupiedBy')?undefined : value;
// }));
let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };

//   alert(JSON.stringify(user, null, 2));


//toJSON function

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);
// alert(numbers[2]);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meet = JSON.parse(str);

// alert(meet.date);


let meet = JSON.parse(str, function(key, value){
    if (key == 'date'){
        alert(value);
        return new Date(value);
    }
    return value;  
});

alert(meet.date.getDate());