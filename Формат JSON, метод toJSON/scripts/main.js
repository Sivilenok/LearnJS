// 1 

let user = {
  name: "Василий Иванович",
  age: 35
};

let userJson = JSON.stringify(user); 
console.log(userJson); 
let userCopy = JSON.parse(userJson); 
console.log(userCopy); 

// 2

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

let serializedMeetup = JSON.stringify(meetup, function replacer(key, value) {
  if (key !== "" && value !== null && typeof value === "object") {
    if (serializedValues.has(value)) {
      return; 
    }
    serializedValues.add(value); 
  }
  return value;
});

let deserializedMeetup = JSON.parse(serializedMeetup);
delete deserializedMeetup.self; 

console.log(deserializedMeetup);
