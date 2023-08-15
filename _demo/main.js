console.log('learn object')

//DataType
// - Primitive : Boolearn ,Number ,String etc...
// - Non-Primitive : Object

//#########################
// ## Object Declaration ##
//#########################
//f unction () {}
// {} ==  stand for Scope / Object
// { record_1 , racord2 , ...}
// each record => <key_name>:<value>
// <value> => any Datatype
// <key_name>  => Datatype : string
// record === property (คุณสมบัติ, สิ่งที่มี) == key-value pair

let user = {
    firstName: "Pavit",
    lastName: 'Jung',
    age: 18,
    isAdmin: true,
    'like human': true,
};

console.log(user);

//#############################
//######## DOT NOTATION #######
// ## ACCESS, MODIFY, DELETE ##
//#############################

// Every action NEED <KEY_NAME> !!
// Dot Notation    <obj>.<key_name> === <value>
// ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้
// เข้าถึง key ที่ไม่ได้ record = undefined

// GET,POLL,READ
console.log(user);
console.log(user.firstName === 'Pavit');
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);
console.log(user.salary);
// confirm.log(user["like human"]);

// MODIFY,UPDATE
// SYNTAX : <obj>.<old_key> = newValue
user.firstName = 'Pravit';
user.age = 25;
user.age += 2;
user.age++;
console.log(user.age)

// ADD
// SYNTAX : <obj>.<new_key> = newValue
user.adress = 'bangkok';
console.log(user);

// DELETE 
// SYNTAX : delete <obj>.<key_name>

delete user.isAdmin;
console.log(user);

//#########################
// #### NESTED Object ####
//#########################

const employee = {
    fullName: "John Doe",
    salary: 500_000,
    address: {
        district: 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand'
    },
};

//ACCESS
console.log(employee.salary);
console.log(employee.address);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village);

employee.address.province = 'Nonthaburian';
delete employee.address.country;

// Prevent crash !!
// Dot ใช้กับ Object เท่านัน !! . + string , [] + variable
// ห้ามมมมมมมมมมมมมมมมม ใช้กับ undefined <undefined>.<key>
// วิธีแก้ optional chaining => <undefined>?.<key>


console.log(employee.addr); // undefined
// console.log(employee.addr.province); // undefined.province
console.log(employee.addr?.province); // debug
console.log(employee.address?.province); 
console.log(employee.address?.village);

//#########################
// #### 4. Check key ####
//#########################

const product = {
    id: 227,
    name: 'IPhone',
    price: 50_000,
    // discount: 0.05,
};

console.log(product.discount); // undefined

// IN Operator
// SYNTAX : <key_name_string> in <obj>

// 'name' in product // => true,flase
console.log('name' in product);
console.log('discount' in product);

// method hasOwnProperty
// Syntax : <obj>.hasOwnProperty(<key_name>)=> BOOL
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));


//#############################
// #### 5. Bracket Notation []
//##############################


// SYNTAX : <obj>['<key_name_string>']
// *** 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// **** 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // Computed key
// Access key-value ผ่านชื่อตัวแปลได้
console.log(product.id)
console.log(product['id']);


// console.log(product.is mobile); crash
console.log(product['is mobile']);

product['name'] = 'IPhone-15';
// console.log(product);

let aaaaa = 'name';
console.log(product[aaaaa]);
console.log(product[aaaaa]);
console.log(product['name']);



//#############################
// #### 6. Property Shorthand
//##############################


let username = prompt('Enter username: ');
let email = prompt('Enter email: ');

// let user = {
//     username: username,
//     email: email,
// };

// #property shorthand
let user = {username, email};
/*
    {
    username : <value in username variable>,
    age : <value in age variable>
    } 
*/
console.log(user);