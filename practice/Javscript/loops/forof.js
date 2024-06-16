var scores = [35,78,98,67]

for(var score of scores) {
    console.log(score)
}

//method- entries

let colors =['red'  , 'green' , 'blue']

for(var [index, value] of colors.entries()){
    console.log(index + ': ' + value)
}


//strings

var str = "scaler"
for(c of str){
    console.log(c)
}