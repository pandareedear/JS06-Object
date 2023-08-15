// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0


// ```js
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// ```
function isEmptyObj(obj) {
    let isEmpty = true; //ให้มัน true ไปก่อน = ว่าง
    for (let key in obj) {
        isEmpty = false; // ได้เข้าลูป = ไม่ว่าง = false
    }
    return isEmpty;
}


// (Obj) => NUMBER
function calSalaries(obj) {

    // 1.Validate => แยก Service
    if (isEmptyObj(obj)) return 0;

    // 2.Calculate
    let sum = 0;
    for (let key in obj) {
        // <obj>,<key>
        // <obj>[key]

        console.log(obj[key]); // object['age']
        sum += object[key]
    }
    return sum;
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let total = calSalaries(salaries);
console.log(total);