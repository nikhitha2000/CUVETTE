
const person = {
    fullName : function(city,country){
    return this.firstName + ' ' + this.lastName + ',' + city + ','+country;
    }
}

const person1 ={
    firstName : "John",
    lastName : "Doe"
}

document.getElementById("demo").innerHTML = person.fullName.call(person1,"Washington","USA");