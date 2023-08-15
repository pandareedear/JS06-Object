const log = console.log;
log('Method and this keyword');

// ###############################
// ######### 1. Intro Method
// ###############################

// each record => called property
// each property => <key>:<value>

// Object === Collection of properties and method
// some record => <key>:<FN>
// called method == ความสามารถของ Object


// 
// const programmer = {
    //     name: 'Pandaree',
    //     age: 25,
    //     dev: devWebsite,
    //     meet: meeting,
    //     solving: solving,
    
    // };
    
    
// function devWebsite () {
//     console.log("I'm working");
// }
// function meeting () {
    //     console.log("I'm meeting");
    // }
    // // ชื่อ Key = function ได้
    // function solving () {
        //     console.log("I'm solving");
        // }

        // // property
        // // Syntax <obj>.<key>
        // log(programmer.name);
        // log(programmer.age);
        
        // // method == ความสามารถของ Object
        // // Syntax : <obj>:<method>()
        // programmer.dev();
        // programmer.meet();
        // programmer.solving();



        // ###############################
        // ######### 1. Intro Method
        // ###############################
// const programmer = {
//     // property shorthand
//     name: 'John',
//     age: 30,
//     dev: function () {
//         console.log("I'm working");
//     },
//     meet: () => console.log("I'm meeting"),
//     sleep() {
//         console.log("I'm sleeping");
//     },
//     // sleep : () => console.log("I'm sleeping")
// };
// programmer.dev();
// programmer.meet();
// programmer.sleep();

// Mini-lab
// สร้าง Object ของตัวเอง
// ระบุคุณสมบัติของตัวเอง 2-3 ข้อ
// ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// key : namedFunction
// key : anonymous FN
// key : arrowFN
// key : shortHand


// function playSport (type) {
//     console.log(`I'm playing ${type}`);
// }

// const me = {
//     name: 'Pandaree',
//     hair: 'Half pink',
//     eye: 'Brown',
//     gender: 'Female',
//     myEx: ['John','Jane'],
//     sport: playSport,
//     sleepAllDay : function () {
//         console.log("I'm dead");
//     },
//     eatAllNight : (menu) => console.log(`i'm eating ${menu} all the time`),
//     focus(task) {console.log(`I'm working on ${task} focus mode`);
//     },
//     // focus : () => {...logic...}
//     // focus : function focus () {...logic...}
// }

// me.sport('basketball');
// me.sleepAllDay();
// me.eatAllNight('TAX');
// me.focus('Javascript lab') ;


// ###############################
// ######### 3. Intro OOP
// ###############################

// OOP : Object Oriented Program
// const car = {
//     brand: "Tesla",
//     model: "X",
//     speed: 80,
//     drive: () => console.log('Driving'),
//     'auto pilot': () => console.log('Self Driving'),
// };

// log(car.brand, car.model);

// car.drive();
// car['auto pilot']();



// const calculator = {
//     sum: (x, y) => x + y,
//     minus: (x, y) => x - y,
// };

// let r1 = calculator.sum(5,7);
// let r2 = calculator.minus(7,3);
// log(r1, r2);

// log(car.speed);
// car.speed = calculator.sum(car.speed,20);
// log(car.speed);
// log(car);


// ###############################
// ######### 3. Intro OOP
// ###############################

// JS Keyword : if,elese,for,while,do,switch,this

// const user = {
//     name: 'CODECAMP',
//     age: 15,
//     sayHi: function () {
//         console.log(`Hello ${this.name}`);
//     },
//     growOld : function () {
//         // console.log(this); 
//         // this == user, this.age == user.age
//         this.age++;
//     }
// };

//Question : ทำอย่างไรให้ method จะสามารถ เข้าถึง property ของตัวเองได้
// user.sayHi();
// user.name = 'software park';
// user.sayHi();

// log(user.age);
// user.growOld();
// log(user.age)
// log(user)

// Q : ค่าของ This ถูกตีค่าตั้งแต่ตอนที่เขียน function รึเปล่า?
// A : ไม่


// FN Declaration
// function dev(feature) {
//     console.log(`${feature} feature developed by ${this.name}`);
// }

// const programmer1 = {
//     name: 'John',
//     develop: dev,
// };


// const programmer2 = {
//     name: 'Jane',
//     develop: dev,
// };

// A : this ถูก solve ตอนที่เรียกใช้ Method
// Caller.method => this == Caller == Object before the dot

// Checkpoint-1 : this == object ที่เรียกใช้ method
// programmer1.develop('Login');
// programmer1.develop('Cart');
// programmer2.develop('Register');


// ##########################################
// ########### 5. Execution Context == Caller
// ##########################################

// Global(Browser)  Context : window object
// window.alert("I'm Global");
// this.alert("I'm Global this");
// alert("I'm execute in window");

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj
// Hoisting
function sayHi() {
    console.log(this); // window
}
var a = 'm';

// Execute Context = Window
// window.sayHi();
// this.sayHi();
// sayHi();

// Function Context
var name = 'Codecamp';
function sayHello() {
    console.log(this.name);
}

// Window Caller
sayHello();
window.sayHello();

const user = {
    name: 'John',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    },
    srcm: function () {
        console.log(`scream by ${this.name}`);
    },
};

// user Caller
user.say();
// SUMMARY : this == Object Caller

// Arrow ไม่มีความสามารถในการสร้าง Context
// Loose Context => Chain to Window
user.scream(); // dont use this keyword with arrow function
user.srcm();