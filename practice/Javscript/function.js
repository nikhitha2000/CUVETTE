// function greet(){
//     console.log("Hello your function is called!");
//     return "Nikhitha"
// }
// greet();


// var Name =  function(){
//     console.log("Yup");
// }
// Name();
// console.log(Name);

//  function name1 (firstname, lastname){
//      console.log(firstname + " " + lastname);
// }
//  name1("Nikhitha","Beeraka")

// // function greet(x,y){
// //     x()
// //     console.log(y)
// // }
// // function greet2(){
// //     console.log("done2")
// // }
// // greet(greet2 ,7);



// // var greet = (x)=>{
// //     return x
// // }
// // console.log((4))


// var arr2 = [3,4,5,6,7];

// var arr3 = arr2.map(function(x){
//     return x*2
// })
// console.log(arr2);


function greet(){
    console.log("Hello your function is called!");
    return "Nikhitha"
}
greet();

var Name =  function(){
    console.log("Yup");
}
Name();
console.log(Name);

function name1 (firstname, lastname){
    console.log(firstname + " " + lastname);
}
name1("Nikhitha","Beeraka");

// function greet(x,y){
//     x();
//     console.log(y);
// }
// function greet2(){
//     console.log("done2");
// }
// greet(greet2 ,7);

// var greet = (x)=>{
//     return x;
// }
// console.log((4));

var arr2 = [3,4,5,6,7];

var arr3 = arr2.map(function(x){
    return x*2;
});
console.log(arr3);

var arr2 = [3,4,5,6,7];

var arr3 = arr2.map(function(x){
    return x>4;
});
console.log(arr3);


var arr2 = [3,4,5,6,7];

var arr3 = arr2.filter(function(x){
    return x>4;
});
console.log(arr3);
