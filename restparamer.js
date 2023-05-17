function Submit(a, b){
console.log(a+b);
}
Submit(2, 3);
Submit(2, 3, 4);
Submit(2,3,4, 5);

function add(a, b,...rest){
console.log(rest);
console.log(a+b);
console.log(arguments);
}

//add(2, 3);
add(2, 3, 4);