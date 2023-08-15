
// #### การเขียน Funcyion มี 2 แบบหลักๆ 
// 1. FN Declaration
function add(x , y) {
    return x + y;
}

// 2. Function Expression 
const minus = function (x , y) {
    return x - y;
};

// 2B. Function Expression (Arrow)
const multiply = (x , y) => x * y;
const log = console.log; // => loh == FN

// const log = console.log(); // => log = undefined (FN Result

log(add(5,2)); //undefined()
// console.log(multiply(5, 2));


// ########### OBJECT ############

const user = {
    name: 'John',
    age: 33,
    isMarried: false,
    address: {
        village: 'Ladda Land',
        province: 'Chiang Mai',
    },
}
// GET DATA
log(user.name);
log(user['name']);

let a = 'name'
log(user.a); // วิ่งไปหา key a => undefined
log(user[a]); // user[name'] => John
// Note : เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง Access ผ่าน []

// ####DELETE

// delete user.isMarried;
log(user);
// delete user['age'];
log(user);

let b = 'address';
delete user[b];
log(user);

// ####UPDATE
let x = 5;
x = x + 2;
// container = value + 2

user.age = user.age + 1;
user.age += 1;
log(user.village);
// container = value + 1


user['age'] = user['age'] + 5
log(user.age);

user['age'] += 5;
log(user.age);

user['age']++;
log(user.age);

//use key variable
let key = 'age';

// Computed key
user[key] = user[key] + 5;   // obj[variable]
// user['age'] = user['age'] + 5; // obj['string']
log(user.age);

user[key] += 1;
user[key]++;
log(user.key);
log(user.age);

// Critical Point
// - bracket notation ใช้กับkeyที่เป็น string หรือ ตัวแปรที่เก็บ string
// - for( <key> in <object>) JS จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// - obj [key] = obj [key] + new => container = value + new