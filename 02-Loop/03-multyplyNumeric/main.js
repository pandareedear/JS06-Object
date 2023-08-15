// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น


const multiplyNumeric = (Object,num) => {
    
    for(let key in Object) {
        // console.log(key);

        let value = Object[key];
        if(typeof value === 'number'){
            // console.log(value,num);
            // Object[key] = Object[key] * num แบบนี้ก็ได้
            // Object[key] = value * num แบบนี้ก็ได้
            Object[key] *= num;
            // menu['width'] = 200 * 3
            // menu['height'] = 300 * 3      
        }
    }
};

let menu = {
        width: 200,
        height: 300,
        title: 'My menu'
};

multiplyNumeric(menu,10)
console.log(menu)




// -------------------
let menuObj = {
    width : 200,
};

menuObj.width = menuObj.width * 2;
menuObj['width'] = menuObj['width'] * 2;

// ในแต่ละรอบ Loof for..in
let key = 'width';
menuObj[key] = menuObj[key] * 2;
