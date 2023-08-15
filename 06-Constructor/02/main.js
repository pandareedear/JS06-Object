// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue


function  Accumulator(startingValue) {
    let = null;
    this.currentValue = startingValue ,
    this.read = function () {
        input = +prompt('Enter value') 
        this.currentValue = input + this.currentValue
    }
    this.show = function () {
        alert(this.currentValue)
    }
}

const output = new Accumulator(50)

console.log(output.currentValue);
console.log(output.read());
console.log(output.show());