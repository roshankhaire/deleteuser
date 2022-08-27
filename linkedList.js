//call to call function


var obj={
    num:2
}
var addToThis=function(a){
    return this.num +a;
}
console.log(addToThis.call(obj,3));
var arr=[5];
console.log(addToThis.apply(obj,arr));
//apply method 
//program for bind

var obj={
    num:4
}
var addToThis=function(a){
    return this.num +a;
}
var bound=addToThis.bind(obj);
console.log(bound(5));

//4)

var Student={

    age:20
}
var show=function(){
    return this.age;
}
var store=show.bind(Student);
console.log(store());
//currying by using binding
let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);


//currying by using closure
let multi=function(x){
    return function(y){
     console.log(x*y);
}

}

let multiplyBy=multi(2);
multiplyBy(15);


