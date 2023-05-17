let obj = {name:"swathi", age: 29};

//let obj2 = obj;:
 //obj2.name= "swathim";
 let obj2 = JSON.parse(JSON.stringify(obj));
 obj2.name= "swathim";
console.log(obj);
console.log(obj2);

let emp  = {name:"swathi", getName:function(){return name}};
let emp2 = Object.assign({}, emp);
emp2.name = "swathim";
//let emp2 = JSON.parse(JSON.stringify(emp));
console.log(emp);
console.log(emp2);
let students = {name:"swathi", age:29, address:{city:"hyd"}};
let students2 = Object.assign({}, students);
 students2.name = "swathim";
console.log(students);
console.log(students2);
let students2 = {...students};