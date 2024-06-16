var arr =[3,6,9,1,2,5]
var result =[]
for(var i =0;i<arr.length;i++){
      result.push ( arr[i]*arr[i])
}
console.log(result)



var arr = [3,6,9,1,2,5]
var arr2 = arr.map(function(arr){
return arr>4
})
console.log(arr2)