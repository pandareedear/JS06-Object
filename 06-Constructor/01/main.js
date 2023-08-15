// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง


function Objectcal() {
    num1 = null;
    num2 = null;
    this.read = function (){
        this.num1 = +prompt("Enter num1")
        this.num2 = +prompt('Enter num2');
    },
    this.sum = function (){
        return this.num1 + this.num2;
    },
    this.mul = function (){
        return this.num1 * this.num2;
    }
}

const output = new Objectcal()

// output.read();
// output.sum();
// output.mul();

console.log(output.read())
console.log(output.sum())
console.log(output.mul())