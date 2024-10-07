var userRole = function(user, name){

       switch (name) {
        case "admin":
            return `${name} has all access`;
        case "supervisor":
            return `${name} has only power of maintaining DB access`;
        case "developer":
            return `${user} has only access to particular repository of code`;
       
        default:
            return `${user} is not yet authorized`
       }

       

}

console.log(userRole("Nikhitha","null"))