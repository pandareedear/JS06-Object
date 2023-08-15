const log = console.log;
log('Learn Ref.');

// Copied by Value
// Copied by Reference

// PRIMITIVE
let message = 'Hello';
let word = message;

// *** COPIED BY VALUE
log(message);
log(word)

// แก้
message = 'Hi';
log(message);
log(word);

// OBJECT
// User ก็บ addredd ของ Literal Object 
let user = {
    name: 'John',
    age: 33,
};


// *** COPIED BY REFFERENCE
// ตัวแปรแบบ object จะเก็บ address (ที่อยู่) ของ object นั้นใน memory
let employee = user;

user.name = 'Joe';
log(employee.name);

user.age = 50;
log(employee.age);

