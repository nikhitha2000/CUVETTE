var arr =[3,4,5,6,7,8]

var arr2 = arr.map(function(arr){
    return arr*arr
})
console.log(arr2)


// filter
var arr =[3,4,5,6,7,8]

var arr2 = arr.filter(function(arr){
    return arr>4
})
console.log(arr2)

//sort
var arr = [6,7,340,-500,-1000,4000,3500]
var arr2 = arr.sort(function(a,b){
    return a-b
})
console.log(arr2)


//reduce

var arr = [2,3,4,5,6,7]
var arr2 = arr.reduce(function(total,item,index){
return total*item
})
console.log(arr2)

var arr = [2,3,4,5,6,7]
var arr2 = arr.reduce(function(total,item,index){
return total*item
},5)//here 5 is taking as intial value
console.log(arr2)