// - ให้รับข้อมูลเป็นชื่อพนักงาน
// - หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า 
// Name: john, salary: 1000, address: Ratchathewi, Bangkok 
// หากไม่มีชื่อแสดงข้อความว่า Not Found

const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

const TERMINATE = 'stop';
// output = {};

let input = prompt('Enter employee name: ')
    // for (let key in employees){
        
    //     if(input = key) {
    //        console.log(employees[]);
    //     } 
    //     else if (input !== key)
    //     {console.log('Not Found');}
    // }
    


if (employees.hasOwnProperty(input)) {
    // output['Name: '] = input;
    // output['salary: '] = employees[input].salary;
    // output['address: '] = employees[input].address;
    // output['district: '] = employees[input].address.district;
    // output['district: '] = employees[input].address.province;
    const obj = employees[input]
    console.log(`name: ${input} salary: ${obj.salary} address: ${obj.address} district: ${obj.address.district} province: ${obj.address.province} `);
} else {console.log('Not Found');}