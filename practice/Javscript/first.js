var a =2;
var b = 3;
var result = a + b;
console.log(result);
var a = 1234567777778989073232163n //keeping n at the end means bigint
console.log(a)
var a =10
console.log(typeof(a))
var a =1234567777778989073232n
console.log(typeof(a))
var a = "Adfar"
console.log(typeof(a))
var a = null;
console.log(typeof(a))
var a;
console.log(typeof(a))
console.log("Nikhitha" === "Nikhitha")

var arr = ["English","Maths",45,65,75,true,12344567899n,null]
console.log(typeof(arr))

var arr1 = [2,3,4,5,6]
arr1.push(7)
console.log(arr1)

var arr2 = [2,3,4,5,6,7,8]
var arr3 = arr2.slice(0,1)
console.log(arr2)
var arr4 = arr2.splice(2,1)
console.log(arr2)
var arr5 = arr2.splice(2,0,"Nikhitha")
console.log(arr2)


function add(...rest){
let sum = rest.reduce((total,item)=>{
    return total + item
    
},0)
console.log(sum)
}

add(23,34,5,6,67,89,90)