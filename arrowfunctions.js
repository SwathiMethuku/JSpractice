let fun1=() => 2+3;
console.log(fun1());
let fun2 =a=>2+a;
console.log(fun2(4));
let name;
let lname;

function fun3(){
    this.name  ="swathi";
    this.lname = "methuku";
this.getProfile=function(){
console.log(this.name);
setTimeout(()=>{
console.log(this.name);
}, 1000);
    }
}

let obj = new fun3();
//obj.getProfile();

let add = ()=>{
    console.log(arguments);
}
//add(1,2);
//add(1,2,3);

const user = {
    name:'swathi',
    getUser: ()=>{
    console.log(this);
    }
}


user.getUser();