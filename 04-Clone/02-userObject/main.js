// ให้สร้าง Object ที่มี property เหมือน state1 แต่ loading 
// ให้มีค่าเป็น false point มีค่า 75 
// และให้เพิ่ม property success เข้าไปโดยให้มีค่าเป็น true 


const state1 = { username: 'john', point: 100, loading: true };
// const newState1 = {};

// Object.assign(newState1,state1);
const newState1 = Object.assign({},state1,{loading: false},{point:75}, {success: true});


// newState1.loading = false;
// newState1.point = 75;
// newState1['success'] = true;

console.log(newState1);