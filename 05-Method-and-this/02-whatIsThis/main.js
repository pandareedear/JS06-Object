ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}

let user = makeUser();
console.log(user.ref.name); 
console.log(user.ref)


// Joe เพราะ FN run ออกมาได้ Object เข้าไปเจอ ref แต่ Objectนี้ไม่มีชื่อ เลยไปใช้ของ Global