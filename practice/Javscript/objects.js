let name = {
    firstname : "Nikhitha",
    lastname : "beeraka",
    skills : ["html","javascript","javascript"],
    address:{
        city : "chennai",
        state : "tamilnadu",
        pincode : 600001,
        country : "india"
    },
    greet : function(){
        return name.firstname + " " + name.lastname
    }
}
console.log(name.address);
console.table(name);
console.log(name.greet());