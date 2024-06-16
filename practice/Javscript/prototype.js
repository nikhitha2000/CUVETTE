// let object = {
//     name :"Nikhitha",
//     age:18,
//     sum: function(x){
//         let multiply = x*x;
//         return multiply;
//     }
    
// };
// console.log(object.sum(4));
// console.log(object)


let person = Object.create({
    name: "Nikhitha",
    age: 18,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    },
    education: {
        highSchool: {
            name: "Anytown High School",
            graduationYear: 2020
        },
        college: {
            name: "State University",
            major: "Computer Science",
            graduationYear: 2024
        }
    },
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
});

console.log(person)
// Accessing nested object properties
console.log(person.address.city); // Output: Anytown
console.log(person.education.college.major); // Output: Computer Science

let object2 = Object.create({
    name :" create",
    age : 18,
    talk :function(){
        console.log("can't talk now")
    }
})
console.log(object2)