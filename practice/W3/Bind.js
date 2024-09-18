const person = {
    firstName: "John",
    lastName :"Doe",
    fullName : function(){
        return this.firstName+" "+this.lastName;
    }
}

const person1 = {
    firstName : "Nikhitha",
    lastName : "Beeraka"
}

document.getElementById("demo").innerHTML = person.fullName.bind(person1)();