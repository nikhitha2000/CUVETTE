var myname = function(){
    console.log("Nikhitha")
}
console.log(myname)

function greet (x,y){
    x()
    console.log(y)
}
function sayMyname(name){
    console.log("nikhitha")
}
greet(sayMyname,4)

