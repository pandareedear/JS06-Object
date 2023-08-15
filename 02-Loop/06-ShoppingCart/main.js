// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)


let name = prompt('Enter product name: ');
let quantity = +prompt('Enter selling quantity : ');
let pricePerPiece = +prompt('Enter price of product: ');
let disCount = +prompt('Enter discount: ');

let output = 0;
let product;
const TERMINATE = 'stop';
const shoppingCart = {};
let totalPrice = 0;


    if (disCount <= 0) {
        //ADD Object
        shoppingCart['name'] = name;
        shoppingCart['quantity'] = quantity;
        shoppingCart['pricePerPiece'] = pricePerPiece;
        
       totalPrice = (shoppingCart['quantity'] * shoppingCart['pricePerPiece']);
       console.log(shoppingCart,totalPrice)
        
    } else {
        //ADD Object
        shoppingCart['name'] = name;
        shoppingCart['quantity'] = quantity;
        shoppingCart['pricePerPiece'] = pricePerPiece;
        shoppingCart['disCount'] = disCount;

        totalPrice = (shoppingCart['quantity'] * shoppingCart['pricePerPiece']) * ((100 - shoppingCart['disCount']) / 100);
        console.log(shoppingCart,totalPrice)
    }




