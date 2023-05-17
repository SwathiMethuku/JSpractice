let empArr = [{name:"swathi", company:"pk", designation:"sse", sal:10000}, {name:"akshay", company:"ctx", designation:"se", sal:4000}];

let myMap = empArr.map(obj=>obj.name.toUpperCase());
console.log(myMap);

let myFilter = empArr.filter(emp=>emp.designation="se");
console.log(myFilter);

let myReduce = empArr.reduce((acc,emp)=>acc+emp.sal,0);
console.log(myReduce);
