// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password  
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

let username = prompt('Enter username: ');
let email = prompt('Enter email: ');
let password = prompt('Enter password: ');

// let user = {
//     username: username,
//     email: email,
//     password: password
// };

// property shorthand
let user = {username, email, password};
/*
    {
    username : <value in username variable>,
    age : <value in age variable>
    } 
*/

console.log(user);