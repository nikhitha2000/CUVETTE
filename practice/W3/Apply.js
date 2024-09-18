const person = {
    fullName: function(city,country){
        return this.firstName+' '+this.lastName+','+city+','+country;
    }
}

const person1 = {
    firstName:"Nikhitha",
    lastName : "Beeraka"
}

document.getElementById("demo").innerHTML = person.fullName.apply(person1,["Califronia","USA"]);