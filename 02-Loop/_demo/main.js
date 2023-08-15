

const user = {
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,
    // key: 'JaAEEE',
};

// for in : Loop through Object
// for (let <key_variable> in <obj>) {}

for (let key in user) {
    console.log(key); // auto dynamic assign by JS in <string>
    // lst: let key = 'firstName'
    // 2nd: let key = 'lastName'
    // 3rd: let key = 'age'

    console.log(user[key]); // need to access by bracket , computed key
    // lst: let [key] == user['firstName'] ===> Codecamp
    // 2nd: let [key] == user['lastName'] ===> Software Park
    // 3st: let [key] == user['age'] ===> 15
   
    console.log(user.key);
    // lst: let.key == user['key'] ===> undefined
    // 2nd: let.key == user['key'] ===> undefined
    // 3st: let.key == user['key'] ===> undefined
}

// 'firstName' in user;
// 'age' in user;
// 'phone' in user;